import { type MotionGoal, createMotion } from "@rbxts/ripple";
import { type Source, cleanup } from "@rbxts/vide";

export function useMotion<T extends MotionGoal>(initialValue: T, valueSource: Source<T>) {
	const motion = createMotion(initialValue, { start: true });
	motion.onStep((value) => valueSource(value));
	cleanup(() => motion.destroy());
	return motion;
}
