import type { MotionGoal, PartialMotionGoal, TweenOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
export declare function useTween<T extends MotionGoal>(initialValue: T, goalValue: PartialMotionGoal<T>, valueSource: Source<T>, options?: TweenOptions): import("@rbxts/ripple").Motion<T>;
