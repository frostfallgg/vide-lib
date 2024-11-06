import Vide, { type Derivable, type Source } from "@rbxts/vide";
interface ScrollBarProps {
    frameHovered: Source<boolean>;
    thumbColor?: Color3;
    trackColor?: Color3;
    width: Derivable<number>;
}
export declare function Scrollbar({ width, thumbColor, frameHovered }: ScrollBarProps): Vide.Node;
export {};
