import { RunService, UserInputService } from "@rbxts/services";
import { type Source, cleanup, effect, source, untrack } from "@rbxts/vide";

export function useThumb(maximumThumbPosition: Source<number>, isThumbHovered: Source<boolean>) {
	const thumbPosition = source(new UDim2(0.5, 0, 0, 0));
	const isDragging = source(false);
	const isOutsideTrack = source(false);

	function clickListener() {
		return UserInputService.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				isDragging(true);
				isOutsideTrack(false);
			}
		});
	}

	function unclickListener() {
		return UserInputService.InputEnded.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				isDragging(false);
				isOutsideTrack(false);
			}
		});
	}

	function dragHandler() {
		const startMouse = UserInputService.GetMouseLocation();
		const startMouseX = startMouse.X;

		let lastMouseY = startMouse.Y;
		const originalPosition = untrack(thumbPosition);
		return RunService.PostSimulation.Connect(() => {
			const mouse = UserInputService.GetMouseLocation();

			if (mouse.X < startMouseX - VALID_MOUSE_BUFFER) {
				if (!untrack(isOutsideTrack)) {
					isOutsideTrack(true);
					thumbPosition(originalPosition);
				}
			} else {
				const mouseY = mouse.Y;
				if (untrack(isOutsideTrack)) {
					isOutsideTrack(false);
					const newThumbY = math.clamp(
						mouseY - startMouse.Y + originalPosition.Y.Offset,
						0,
						maximumThumbPosition(),
					);
					thumbPosition(new UDim2(0.5, 0, 0, newThumbY));
				} else {
					const deltaY = mouseY - lastMouseY;
					const currentThumbY = untrack(thumbPosition).Y.Offset;
					const newThumbY = math.clamp(currentThumbY + deltaY, 0, maximumThumbPosition());
					thumbPosition(new UDim2(0.5, 0, 0, newThumbY));
				}
				lastMouseY = mouseY;
			}
		});
	}

	effect(() => {
		if (isThumbHovered()) {
			const clickCon = clickListener();
			cleanup(() => clickCon.Disconnect());
		}
	});

	effect(() => {
		if (isDragging()) {
			const unclickCon = unclickListener();
			const dragCon = dragHandler();
			cleanup(() => {
				dragCon.Disconnect();
				unclickCon.Disconnect();
			});
		}
	});

	return thumbPosition;
}

// Maximum the mouse can move outside the thumb and still be considered a drag
const VALID_MOUSE_BUFFER = 75;
