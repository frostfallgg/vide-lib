import Vide, { type Derivable, type Source } from "@rbxts/vide";
interface ScrollBarProps {
    barWidth: Derivable<number>;
    isFrameHovered: Source<boolean>;
    maxContentScroll: Source<number>;
    onScrollCallback: (positionY: number, maxScroll: number, trackHeight: number) => void;
    thumbColor: Derivable<Color3>;
    thumbHeightMultiplier: Source<number>;
    trackColor: Derivable<Color3>;
}
export declare function Scrollbar({ barWidth, thumbHeightMultiplier, onScrollCallback, maxContentScroll, isFrameHovered, thumbColor, trackColor, }: ScrollBarProps): Vide.Node;
export {};
