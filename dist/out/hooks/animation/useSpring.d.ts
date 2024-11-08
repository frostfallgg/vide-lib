import type { MotionGoal, PartialMotionGoal, SpringOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
export declare function useSpring<T extends MotionGoal>(initialValue: T, goalValue: PartialMotionGoal<T>, valueSource: Source<T>, options?: SpringOptions): import("@rbxts/ripple").Motion<T>;
