import type { Derivable, Source } from "@rbxts/vide";
import Vide from "@rbxts/vide";
interface TitleBarProps {
    CloseBtnHoverColor: Derivable<Color3>;
    CloseCallback: () => void;
    Height: Derivable<number>;
    IconColor: Derivable<Color3>;
    IsHovered: Source<boolean>;
    MinimizeCallback: () => void;
    RestoreCallback: () => void;
    TitleBarColor: Derivable<Color3>;
}
export declare function TitleBar({ CloseBtnHoverColor, Height, IconColor, TitleBarColor, CloseCallback, RestoreCallback, MinimizeCallback, IsHovered, }: TitleBarProps): Vide.Node;
export {};
