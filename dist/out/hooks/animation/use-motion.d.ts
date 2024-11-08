import { type MotionGoal } from "@rbxts/ripple";
import { type Source } from "@rbxts/vide";
/**
 * Creates a motion object that can be used to animate a value, if a motion is in \
 * progress and a new motion is started, the previous motion is stopped.
 *
 * @param valueSource The source of the value to animate.
 * @param motionType The type of motion to create.
 * @returns A function to create a motion object and start the animation, a function to cleanup the motion object.
 */
export declare function useMotion<T extends MotionGoal>(initialValue: T, valueSource: Source<T>): import("@rbxts/ripple").Motion<T>;
