import Vide, { cleanup, derive, effect, read, source, type Derivable, type Source } from "@rbxts/vide";
import { Button } from "../base/button";
import { Frame } from "../base/frame";
import { useScrollInput } from "./hooks/use-scroll-input";
import { useThumb } from "./hooks/use-thumb";

interface ScrollBarProps {
	barWidth: Derivable<number>;
	isFrameHovered: Source<boolean>;
	maxContentScroll: Source<number>;
	onScrollCallback: (positionY: number, maxScroll: number, trackHeight: number) => void;
	thumbColor: Derivable<Color3>;
	thumbHeightMultiplier: Source<number>;
	trackColor: Derivable<Color3>;
}

export function Scrollbar({
	barWidth,
	thumbHeightMultiplier,
	onScrollCallback,
	maxContentScroll,
	isFrameHovered,
	thumbColor,
	trackColor,
}: ScrollBarProps) {
	// Outputs
	const trackSizeOut = source(new Vector2(0, 0));

	// Actions
	function trackAction(ref: Frame) {
		const sizeChanged = ref
			.GetPropertyChangedSignal("AbsoluteSize")
			.Connect(() => trackSizeOut(ref.AbsoluteSize));
		cleanup(() => sizeChanged.Disconnect());
	}

	// Events
	const isThumbHovered = source(false);

	// Props
	const barSize = derive(() => new UDim2(0, read(barWidth), 1, 0));

	// Computed props
	const thumbSizeDerived = derive(() => {
		const trackSizeY = trackSizeOut().Y;
		const relativeToContent = thumbHeightMultiplier() * trackSizeY;
		if (relativeToContent >= trackSizeY) {
			return new UDim2(0, read(barWidth), 0, 0);
		}
		return new UDim2(1, 0, 0, relativeToContent);
	});
	const maxThumbPosition = derive(() => trackSizeOut().Y - thumbSizeDerived().Height.Offset);

	// Interactions
	const thumbPosition = useThumb(maxThumbPosition, isThumbHovered);
	useScrollInput(maxThumbPosition, isFrameHovered, thumbPosition);

	effect(() => onScrollCallback(thumbPosition().Height.Offset, maxContentScroll(), trackSizeOut().Y));

	return (
		<frame
			Name={"scroll-bar"}
			Size={barSize}
			AnchorPoint={new Vector2(1, 0)}
			Position={UDim2.fromScale(1, 0)}
			BackgroundTransparency={1}
		>
			<Frame
				native={{
					Name: "scroll-track",
					Size: new UDim2(0.5, 0, TRACK_HEIGHT_MULTIPLER, 0),
					AnchorPoint: new Vector2(0.5, 0.5),
					Position: UDim2.fromScale(0.5, 0.5),
					BackgroundColor3: trackColor,
					action: trackAction,
				}}
				cornerRadius={180}
			>
				<Button
					native={{
						Name: "scroll-thumb",
						Size: thumbSizeDerived,
						AnchorPoint: new Vector2(0.5, 0),
						Position: thumbPosition,
						BackgroundColor3: thumbColor,
						MouseEnter: () => isThumbHovered(true),
						MouseLeave: () => isThumbHovered(false),
					}}
					cornerRadius={180}
				/>
			</Frame>
		</frame>
	);
}

const TRACK_HEIGHT_MULTIPLER = 0.985;
const THUMB_COLOR = Color3.fromHSV(0, 0.04, 0.46);
