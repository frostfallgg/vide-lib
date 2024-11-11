import Vide, { derive, source, type Derivable, type Source } from "@rbxts/vide";
import { Frame } from "../base/frame";
import { ImageLabel } from "../base/image-label";
import { useDragResize } from "./hooks/use-drag-resize";

type ResizeHandleProps = {
	color: Derivable<Color3>;
	parentSize: Source<UDim2>;
	parentPosition: Source<UDim2>;
	parentAnchor: Source<Vector2>;
};

export function ResizeHandle({ color, parentSize, parentPosition, parentAnchor }: ResizeHandleProps) {
	const isHovered = source(false);
	const isDragging = useDragResize(isHovered, parentSize, parentPosition, parentAnchor);
	const transparency = derive(() => (isHovered() || isDragging() ? 0.75 : 0.9));

	return (
		<Frame
			native={{
				Position: UDim2.fromScale(1, 1),
				AnchorPoint: new Vector2(1, 1),
				Size: UDim2.fromScale(0.1, 0.1),
				BackgroundTransparency: 1,
				MouseEnter: () => isHovered(true),
				MouseLeave: () => isHovered(false),
			}}
			aspectRatio={1}
			maxSize={new Vector2(34, 34)}
			minSize={new Vector2(16, 16)}
		>
			<ImageLabel
				native={{
					Image: "rbxassetid://117985231770365",
					Size: UDim2.fromScale(0.85, 0.85),
					BackgroundTransparency: 1,
					ImageColor3: color,
					ImageTransparency: transparency,
				}}
			/>
		</Frame>
	);
}
