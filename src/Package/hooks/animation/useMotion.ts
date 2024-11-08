import { type MotionGoal, createMotion } from "@rbxts/ripple";
import { type Source, cleanup } from "@rbxts/vide";

type MotionType = "tween" | "spring" | "linear" | "immediate";

/**
 * Creates a motion object that can be used to animate a value, if a motion is in \
 * progress and a new motion is started, the previous motion is stopped.
 *
 * @param valueSource The source of the value to animate.
 * @param motionType The type of motion to create.
 * @returns A function to create a motion object and start the animation, a function to cleanup the motion object.
 */
export function useMotion<T extends MotionGoal>(initialValue: T, valueSource: Source<T>) {
	const motion = createMotion(initialValue, { start: false });
	motion.onStep((value) => valueSource(value));
	cleanup(() => motion.stop());

	return motion;
}
