import Vide, { type Node, type Source } from "@rbxts/vide";
type ContentsContainerProps = {
    children?: Node;
    position: Source<UDim2>;
    size: Source<UDim2>;
    contentSizeOut: Source<Vector2>;
};
export declare function ContentsContainer({ children, position, size, contentSizeOut: contentSizeSource, }: ContentsContainerProps): Vide.Node;
export {};
