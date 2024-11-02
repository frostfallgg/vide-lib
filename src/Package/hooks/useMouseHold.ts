import { cleanup, effect, source, type Source } from "@rbxts/vide";
import { useMouseHover } from "./useMouseHover";

export function useMouseHold<T extends GuiObject>(
	ref: Source<T | undefined>,
	isEnabled: boolean | Source<boolean> = true,
) {
	const isHolding = source(false);
	const isHovered = useMouseHover(ref, isEnabled);

	const inputStartListener = (ref: T) => {
		return ref.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				isHolding(true);
				inputEndListener(ref);
			}
		});
	};

	const inputEndListener = (ref: T) => {
		ref.InputEnded.Once((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				isHolding(false);
			}
		});
	};

	effect(() => {
		const node = ref();
		if (node && isHovered() && isEnabled) {
			const inputStart = inputStartListener(node);

			cleanup(() => inputStart.Disconnect());
		}
	});

	return isHolding;
}
