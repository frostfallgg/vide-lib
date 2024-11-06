import Vide, { type Node, type Source } from "@rbxts/vide";
type ContentsContainerProps = {
    children?: Node;
    position: Source<UDim2>;
    size: Source<UDim2>;
};
export declare function ContentsContainer({ children, position, size }: ContentsContainerProps): Vide.Node;
export {};
