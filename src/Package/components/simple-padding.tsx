import type { Derivable } from "@rbxts/vide";
import Vide from "@rbxts/vide";

interface SimplePaddingProps {
	padding?: Derivable<UDim>;
}

export function SimplePadding({ padding }: SimplePaddingProps) {
	const paddingValue = padding ?? new UDim(0, 4);

	return (
		<uipadding
			PaddingBottom={paddingValue}
			PaddingLeft={paddingValue}
			PaddingRight={paddingValue}
			PaddingTop={paddingValue}
		/>
	);
}
