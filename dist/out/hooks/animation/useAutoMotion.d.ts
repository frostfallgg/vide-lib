import { type LinearOptions, type MotionGoal, type PartialMotionGoal, type SpringOptions, type TweenOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
type MotionType = "tween" | "spring" | "linear" | "immediate";
export declare function useAutoMotion<T extends MotionGoal, K = TweenOptions | SpringOptions | LinearOptions>(valueSource: Source<T>, motionType: MotionType): LuaTuple<[<U extends PartialMotionGoal<T>>(initialValue: T, goal: U, config?: K) => Promise<void>, () => void]>;
export {};
