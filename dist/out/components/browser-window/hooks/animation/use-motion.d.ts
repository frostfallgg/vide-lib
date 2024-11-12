import { type MotionGoal } from "@rbxts/ripple";
import { type Source } from "@rbxts/vide";
export declare function useMotion<T extends MotionGoal>(initialValue: T, valueSource: Source<T>): import("@rbxts/ripple").Motion<T>;
