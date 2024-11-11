import Vide, { type Derivable, type Source } from "@rbxts/vide";
type ResizeHandleProps = {
    color: Derivable<Color3>;
    parentSize: Source<UDim2>;
    parentPosition: Source<UDim2>;
    parentAnchor: Source<Vector2>;
};
export declare function ResizeHandle({ color, parentSize, parentPosition, parentAnchor }: ResizeHandleProps): Vide.Node;
export {};
