import Vide, { type Derivable } from "@rbxts/vide";
interface TitleBarButtonProps {
    Callback: () => void;
    Icon: Derivable<string>;
    IconColor: Derivable<Color3>;
    LayoutOrder: number;
    Name?: string;
    OnHoverBackgroundColor: Derivable<Color3>;
    OnHoverTransparency: number;
}
export declare function TitleBarButton({ Name, Callback, Icon, IconColor, OnHoverBackgroundColor, LayoutOrder, OnHoverTransparency, }: TitleBarButtonProps): Vide.Node;
export {};
