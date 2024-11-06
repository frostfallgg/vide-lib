import Vide, { derive, read, type Derivable, type Source } from "@rbxts/vide";
import { ShapeButton } from "../shape-button";

interface ScrollBarProps {
	frameHovered: Source<boolean>;
	thumbColor?: Color3;
	trackColor?: Color3;
	width: Derivable<number>;
}

export function Scrollbar({ width, thumbColor, frameHovered }: ScrollBarProps) {
	// Thumb props
	const _thumbSize = derive(() => new UDim2(0, read(width), 0, 60));
	const _thumbColor = derive(() => read(thumbColor ?? THUMB_COLOR));

	// Track props
	const _trackSize = derive(() => new UDim2(0, read(width), 1, 0));

	return (
		<frame
			Name={"scroll-bar"}
			Size={_trackSize}
			AnchorPoint={new Vector2(1, 0)}
			Position={UDim2.fromScale(1, 0)}
			BackgroundTransparency={1}
		>
			<ShapeButton
				native={{
					Name: "scroll-track",
					Size: new UDim2(0.5, 0, 0.985, 0),
					AnchorPoint: new Vector2(0.5, 0.5),
					Position: UDim2.fromScale(0.5, 0.5),
				}}
				shape={"circle_128"}
				color={Color3.fromRGB(43, 45, 49)}
			>
				<ShapeButton
					native={{
						Name: "scroll-thumb",
						Size: new UDim2(1, 0, 0, 125),
						AnchorPoint: new Vector2(0.5, 0),
						Position: UDim2.fromScale(0.5, 0),
					}}
					shape={"circle_128"}
					color={Color3.fromRGB(26, 27, 30)}
				/>
			</ShapeButton>
		</frame>
	);
}

const THUMB_COLOR = Color3.fromHSV(0, 0.04, 0.46);
