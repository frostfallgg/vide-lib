import { type LinearOptions, type MotionGoal, type PartialMotionGoal, type SpringOptions, type TweenOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
type MotionType = "tween" | "spring" | "linear" | "immediate";
/**
 * Creates a motion object that can be used to animate a value, if a motion is in \
 * progress and a new motion is started, the previous motion is stopped.
 *
 * @param valueSource The source of the value to animate.
 * @param motionType The type of motion to create.
 * @returns A function to create a motion object and start the animation, a function to cleanup the motion object.
 */
export declare function useMotion<T extends MotionGoal, K = TweenOptions | SpringOptions | LinearOptions>(valueSource: Source<T>, motionType: MotionType): LuaTuple<[<U extends PartialMotionGoal<T>>(initialValue: T, goal: U, config?: K) => Promise<void>, () => void]>;
export {};
