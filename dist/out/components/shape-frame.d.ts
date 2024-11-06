import Vide, { type Derivable } from "@rbxts/vide";
import type { ComponentBase } from "../props/ComponentBase";
type Shape = "circle_64" | "circle_128" | "squircle_128" | "squircle_256";
export interface ShapeFrameProps<T extends GuiObject> extends ComponentBase<T> {
    border?: Derivable<boolean>;
    borderColor?: Derivable<Color3>;
    color?: Derivable<Color3>;
    shape: Derivable<Shape>;
}
export declare function ShapeFrame({ children, border, borderColor, color, shape, native, }: ShapeFrameProps<ImageLabel>): Vide.Node;
export {};
