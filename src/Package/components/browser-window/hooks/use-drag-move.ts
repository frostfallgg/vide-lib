import { ContextActionService, RunService, UserInputService } from "@rbxts/services";
import { type Source, cleanup, effect, source, untrack } from "@rbxts/vide";

export function useDragMove(isHovered: Source<boolean>, position: Source<UDim2>) {
	const isDragging = source(false);
	const startOffset = source<Vector2>(new Vector2());

	function clickHandler(_: string, state: Enum.UserInputState, input: InputObject) {
		if (state === Enum.UserInputState.Begin) {
			const mousePos = UserInputService.GetMouseLocation();
			const currentPos = untrack(position);
			const framePos = new Vector2(currentPos.X.Offset, currentPos.Y.Offset);
			startOffset(mousePos.sub(framePos));
			isDragging(true);
		}
		return Enum.ContextActionResult.Sink;
	}

	function unclickHandler(_: string, state: Enum.UserInputState, input: InputObject) {
		if (state === Enum.UserInputState.End) {
			isDragging(false);
		}
		return Enum.ContextActionResult.Sink;
	}

	function dragHandler() {
		return RunService.PostSimulation.Connect(() => {
			const mousePos = UserInputService.GetMouseLocation();
			const offset = untrack(startOffset);
			const currentPos = untrack(position);

			const newPosition = new UDim2(
				currentPos.X.Scale,
				mousePos.X - offset.X,
				currentPos.Y.Scale,
				mousePos.Y - offset.Y,
			);

			position(newPosition);
		});
	}

	effect(() => {
		if (isHovered() && !isDragging()) {
			ContextActionService.BindAction("browser_drag", clickHandler, false, Enum.UserInputType.MouseButton1);

			cleanup(() => {
				ContextActionService.UnbindAction("browser_drag");
			});
		}
	});

	effect(() => {
		if (isDragging()) {
			ContextActionService.BindAction(
				"browser_undrag",
				unclickHandler,
				false,
				Enum.UserInputType.MouseButton1,
			);
			const dragCon = dragHandler();

			cleanup(() => {
				dragCon.Disconnect();
				ContextActionService.UnbindAction("browser_undrag");
			});
		}
	});
}
