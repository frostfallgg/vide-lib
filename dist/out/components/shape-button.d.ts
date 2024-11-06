import Vide from "@rbxts/vide";
import type { ShapeFrameProps } from "./shape-frame";
interface ShapeButtonProps extends ShapeFrameProps<ImageButton> {
    onClick?: () => void;
}
export declare function ShapeButton({ children, border, borderColor, color, shape, onClick, native, }: ShapeButtonProps): Vide.Node;
export {};
