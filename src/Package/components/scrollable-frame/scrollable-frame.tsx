import Vide, { cleanup, derive, read, source, type Derivable } from "@rbxts/vide";
import type { ComponentBase } from "Package/props/ComponentBase";
import { Themes } from "Package/resources/themes";
import { ContentsContainer } from "./contents-container";
import { Scrollbar } from "./scroll-bar";

interface ScrollableFrameProps extends ComponentBase<Frame> {
	anchorPoint?: Derivable<Vector2>;
	backgroundColor?: Derivable<Color3>;
	position?: Derivable<UDim2>;
	scrollBarWidth?: Derivable<number>;
	scrollThumbColor?: Derivable<Color3>;
	scrollTrackColor?: Derivable<Color3>;
	size?: Derivable<UDim2>;
}

export function ScrollableFrame({
	children,
	size,
	position,
	anchorPoint,
	scrollBarWidth,
	backgroundColor = Themes.Discord.Dark[2],
	scrollThumbColor = Themes.Discord.Dark[6],
	scrollTrackColor = Themes.Discord.Dark[3],
}: ScrollableFrameProps) {
	// Ouputs
	const visibleContentSize = source(new Vector2(0, 0));
	const totalContentSize = source(new Vector2(0, 0));

	// Events
	const isFrameHovered = source(false);

	// Props
	const contentContainerPosition = source(new UDim2(0, 0, 0, 0));

	// Computed props
	const contentContainerSize = derive(() => new UDim2(1, -read(scrollBarWidth ?? SCROLL_WIDTH), 0, 0));
	const thumbHeight = derive(() => {
		const visibleSize = visibleContentSize();
		const totalSize = totalContentSize();
		return visibleSize.Y / totalSize.Y;
	});
	const maxContentScroll = derive(() => math.max(0, totalContentSize().Y - visibleContentSize().Y));

	// Actions
	function frameAction(ref: Frame) {
		const connection = ref.GetPropertyChangedSignal("AbsoluteSize").Connect(() => {
			visibleContentSize(ref.AbsoluteSize);
		});
		cleanup(() => connection.Disconnect());
	}

	// Callbacks
	function scrollCallback(pos: number, max: number, trackHeight: number) {
		const scrollPercentage = pos / (trackHeight - trackHeight * (trackHeight / (trackHeight + max)));
		const scrollPosition = scrollPercentage * max;

		contentContainerPosition(new UDim2(0, 0, 0, -scrollPosition));
	}

	return (
		<frame
			Size={size}
			Position={position}
			AnchorPoint={anchorPoint}
			ClipsDescendants={true}
			BackgroundColor3={backgroundColor}
			Name={"scrollable-frame"}
			MouseEnter={() => isFrameHovered(true)}
			MouseLeave={() => isFrameHovered(false)}
			action={frameAction}
		>
			<Scrollbar
				barWidth={scrollBarWidth ?? SCROLL_WIDTH}
				isFrameHovered={isFrameHovered}
				thumbHeightMultiplier={thumbHeight}
				onScrollCallback={scrollCallback}
				maxContentScroll={maxContentScroll}
				thumbColor={scrollThumbColor}
				trackColor={scrollTrackColor}
			/>
			<ContentsContainer
				size={contentContainerSize}
				position={contentContainerPosition}
				contentSizeOut={totalContentSize}
			>
				{children}
			</ContentsContainer>
		</frame>
	);
}

// Default values
const SCROLL_WIDTH = 18;
