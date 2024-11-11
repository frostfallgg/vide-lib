import Vide, { type Derivable, type Node, type Source } from "@rbxts/vide";
type BrowserWindowProps = {
    size?: Derivable<UDim2>;
    position?: Derivable<UDim2>;
    anchorPoint?: Derivable<Vector2>;
    backgroundColor?: Derivable<Color3>;
    titleBarColor?: Derivable<Color3>;
    closeBtnHoverColor?: Derivable<Color3>;
    iconColor?: Derivable<Color3>;
    isOpen: Source<boolean>;
    isMinimized?: Source<boolean>;
    isMaximized?: Source<boolean>;
    children?: Node;
};
export declare function BrowserWindow({ size, position, anchorPoint, backgroundColor, titleBarColor, closeBtnHoverColor, iconColor, isOpen, children, }: BrowserWindowProps): Vide.Node;
export {};
