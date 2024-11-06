import Vide, { type Derivable } from "@rbxts/vide";
import type { ComponentBase } from "../../props/ComponentBase";
interface ScrollableFrameProps extends ComponentBase<Frame> {
    anchorPoint?: Derivable<Vector2>;
    color?: Derivable<Color3>;
    position?: Derivable<UDim2>;
    scrollBarWidth?: Derivable<number>;
    size?: Derivable<UDim2>;
}
export declare function ScrollableFrame({ native, children, size, position, anchorPoint, scrollBarWidth, color, }: ScrollableFrameProps): Vide.Node;
export {};
