import { cleanup, effect, source, type Source } from "@rbxts/vide";

export function useMouseHover<T extends GuiObject>(
	ref: Source<T | undefined>,
	isEnabled: boolean | Source<boolean> = true,
) {
	const isHovered = source(false);

	effect(() => {
		const instance = ref();

		if (instance && isEnabled) {
			const mouseIn = instance.MouseEnter.Connect(() => isHovered(true));
			const mouseOut = instance.MouseLeave.Connect(() => isHovered(false));

			cleanup(() => {
				mouseIn.Disconnect();
				mouseOut.Disconnect();
			});
		}
	});
	return isHovered;
}
