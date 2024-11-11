import { ContextActionService, RunService, UserInputService } from "@rbxts/services";
import { type Derivable, type Source, cleanup, effect, source, untrack } from "@rbxts/vide";
import { getCompensateAnchorPosition } from "Package/utility/scale-util";

enum ContextCommands {
	BrowserResize = "browser_resize",
	BrowserStopResize = "browser_stop_resize",
}

export function useDragResize(
	isHovered: Source<boolean>,
	size: Source<UDim2>,
	position: Source<UDim2>,
	anchor: Source<Vector2>,
	minSize: Derivable<Vector2> = new Vector2(200, 340),
) {
	const isDragging = source(false);
	let startOffset: Vector2;
	let originalAnchor: Vector2;
	let originalPosition: UDim2;
	let originalSize: UDim2;

	function clickHandler(_: string, state: Enum.UserInputState, input: InputObject) {
		if (state === Enum.UserInputState.Begin) {
			const mousePos = UserInputService.GetMouseLocation();
			originalSize = untrack(size);
			originalPosition = untrack(position);
			originalAnchor = untrack(anchor);
			startOffset = new Vector2(originalSize.X.Offset - mousePos.X, originalSize.Y.Offset - mousePos.Y);
			const newAnchor = new Vector2(0, 0);
			const adjustedPosition = getCompensateAnchorPosition(
				originalPosition,
				originalSize,
				originalAnchor,
				newAnchor,
			);
			position(adjustedPosition);
			anchor(newAnchor);
			isDragging(true);
		}
		return Enum.ContextActionResult.Sink;
	}

	function unclickHandler(_: string, state: Enum.UserInputState, input: InputObject) {
		if (state === Enum.UserInputState.End) {
			const adjustedPosition = getCompensateAnchorPosition(
				untrack(position),
				untrack(size),
				new Vector2(0, 0),
				originalAnchor,
			);

			anchor(originalAnchor);
			position(adjustedPosition);
			isDragging(false);
		}
		return Enum.ContextActionResult.Sink;
	}

	function dragHandler() {
		let lastMousePos = UserInputService.GetMouseLocation();
		return RunService.PostSimulation.Connect(() => {
			const mousePos = UserInputService.GetMouseLocation();
			if (mousePos.X !== lastMousePos.X || mousePos.Y !== lastMousePos.Y) {
				const currentSize = untrack(size);
				const newSize = new UDim2(
					currentSize.X.Scale,
					mousePos.X + startOffset.X,
					currentSize.Y.Scale,
					mousePos.Y + startOffset.Y,
				);

				size(newSize);
				lastMousePos = mousePos;
			}
		});
	}

	effect(() => {
		if (isHovered() && !isDragging()) {
			ContextActionService.BindAction(
				ContextCommands.BrowserResize,
				clickHandler,
				false,
				Enum.UserInputType.MouseButton1,
			);

			cleanup(() => {
				ContextActionService.UnbindAction(ContextCommands.BrowserResize);
			});
		}
	});

	effect(() => {
		if (isDragging()) {
			ContextActionService.BindAction(
				ContextCommands.BrowserStopResize,
				unclickHandler,
				false,
				Enum.UserInputType.MouseButton1,
			);
			const resizeCon = dragHandler();
			cleanup(() => {
				resizeCon.Disconnect();
				ContextActionService.UnbindAction(ContextCommands.BrowserStopResize);
			});
		}
	});

	return isDragging;
}
