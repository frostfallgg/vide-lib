import { RunService, UserInputService } from "@rbxts/services";
import { type Source, cleanup, effect, source, untrack } from "@rbxts/vide";

export function useThumb(maximumThumbPosition: Source<number>, isDragging: Source<boolean>) {
	const thumbPosition = source(new UDim2(0.5, 0, 0, 0));
	const isOutsideTrack = source(false);

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
		if (isDragging()) {
			const dragCon = dragHandler();
			cleanup(() => {
				dragCon.Disconnect();
			});
		}
	});

	return thumbPosition;
}

// Maximum the mouse can move outside the thumb and still be considered a drag
const VALID_MOUSE_BUFFER = 75;
