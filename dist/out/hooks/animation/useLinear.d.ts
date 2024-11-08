import type { LinearOptions, MotionGoal, PartialMotionGoal } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
export declare function useLinear<T extends MotionGoal>(initialValue: T, goalValue: PartialMotionGoal<T>, valueSource: Source<T>, options?: LinearOptions): import("@rbxts/ripple").Motion<T>;
