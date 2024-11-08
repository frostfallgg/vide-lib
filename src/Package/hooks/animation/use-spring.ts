import type { MotionGoal, PartialMotionGoal, SpringOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
import { useMotion } from "./use-motion";

export function useSpring<T extends MotionGoal>(
	initialValue: T,
	goalValue: PartialMotionGoal<T>,
	valueSource: Source<T>,
	options?: SpringOptions,
) {
	const motion = useMotion(initialValue, valueSource);

	motion.spring(goalValue, options);
	return motion;
}
