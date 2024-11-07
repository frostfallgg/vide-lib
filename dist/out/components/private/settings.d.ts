import { type Derivable } from "@rbxts/vide";
import Vide from "@rbxts/vide";
export interface SettingsProps {
    aspectRatio?: Derivable<number>;
    aspectRatioConstraint?: Derivable<"Height" | "Width">;
    flexItemLineAlign?: Derivable<"Automatic" | "Center" | "End" | "Start" | "Stretch">;
    flexMode?: Derivable<"None" | "Grow" | "Shrink">;
    maxSize?: Derivable<Vector2>;
    minSize?: Derivable<Vector2>;
}
export declare function Settings(props: SettingsProps): Vide.Node;
