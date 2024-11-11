import Vide, { type Derivable } from "@rbxts/vide";
import type { ComponentBase } from "../../props/ComponentBase";
interface ScrollableFrameProps extends ComponentBase<Frame> {
    anchorPoint?: Derivable<Vector2>;
    backgroundColor?: Derivable<Color3>;
    position?: Derivable<UDim2>;
    scrollBarWidth?: Derivable<number>;
    scrollThumbColor?: Derivable<Color3>;
    scrollTrackColor?: Derivable<Color3>;
    size?: Derivable<UDim2>;
}
export declare function ScrollableFrame({ children, size, position, anchorPoint, scrollBarWidth, backgroundColor, scrollThumbColor, scrollTrackColor, }: ScrollableFrameProps): Vide.Node;
export {};
