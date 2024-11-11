import Vide from "@rbxts/vide";
import { type Derivable } from "@rbxts/vide";
interface TransitionProps {
    anchor?: Derivable<Vector2>;
    before?: () => Vide.Node;
    children?: Vide.Node;
    events?: Vide.InstanceEventAttributes<Frame>;
    groupColor?: Derivable<Color3>;
    groupTransparency?: Derivable<number>;
    layoutOrder?: Derivable<number>;
    position?: Derivable<UDim2>;
    rotation?: Derivable<number>;
    size?: Derivable<UDim2>;
    zIndex?: Derivable<number>;
}
export declare function Transition(props: TransitionProps): Vide.Node;
export {};
