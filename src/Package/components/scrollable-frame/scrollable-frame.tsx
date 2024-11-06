import Vide, { derive, read, source, type Derivable } from "@rbxts/vide";
import type { ComponentBase } from "Package/props/ComponentBase";
import { ContentsContainer } from "./contents-container";
import { Scrollbar } from "./scroll-bar";

interface ScrollableFrameProps extends ComponentBase<Frame> {
	anchorPoint?: Derivable<Vector2>;
	color?: Derivable<Color3>;
	position?: Derivable<UDim2>;
	scrollBarWidth?: Derivable<number>;
	size?: Derivable<UDim2>;
}

export function ScrollableFrame({
	native,
	children,
	size,
	position,
	anchorPoint,
	scrollBarWidth,
	color,
}: ScrollableFrameProps) {
	// Frame events
	const _isFrameHovered = source(false);

	// Contents props
	const _contentContainerSize = derive(() => new UDim2(1, -read(scrollBarWidth ?? SCROLL_WIDTH), 0, 0));
	const _contentContainerPosition = source(new UDim2(0, 0, 0, 0));

	return (
		<frame
			{...native}
			Size={size}
			Position={position}
			AnchorPoint={anchorPoint}
			ClipsDescendants={true}
			BackgroundColor3={color}
			Name={"scrollable-frame"}
			MouseEnter={(_) => _isFrameHovered(true)}
			MouseLeave={(_) => _isFrameHovered(false)}
		>
			<Scrollbar width={scrollBarWidth ?? SCROLL_WIDTH} frameHovered={_isFrameHovered} />
			<ContentsContainer size={_contentContainerSize} position={_contentContainerPosition}>
				{children}
			</ContentsContainer>
		</frame>
	);
}

// Default values
const SCROLL_WIDTH = 18;
