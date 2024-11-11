import { ContextActionService } from "@rbxts/services";
import { type Source, cleanup, effect, untrack } from "@rbxts/vide";

// TODO: Add support for gamepad and touch
export function useScrollInput(
	maximumThumbPosition: Source<number>,
	isHovered: Source<boolean>,
	thumbPosition: Source<UDim2>,
) {
	function scrollHandler(actionName: string, state: Enum.UserInputState, input: InputObject) {
		if (input.UserInputType === Enum.UserInputType.MouseWheel) {
			const scrollDir = input.Position.Z;
			const currentPosition = untrack(thumbPosition);
			const currX = currentPosition.X;
			const currY = currentPosition.Y;
			const newY = math.clamp(currY.Offset - scrollDir * PIXELS_PER_SCROLL, 0, maximumThumbPosition());
			thumbPosition(new UDim2(currX.Scale, currX.Offset, currY.Scale, newY));
		}
		return Enum.ContextActionResult.Sink;
	}

	effect(() => {
		if (isHovered()) {
			ContextActionService.BindAction("GuiScroll", scrollHandler, false, Enum.UserInputType.MouseWheel);
			cleanup(() => ContextActionService.UnbindAction("GuiScroll"));
		}
	});
}

const PIXELS_PER_SCROLL = 20;
