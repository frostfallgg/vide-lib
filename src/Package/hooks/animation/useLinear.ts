import type { LinearOptions, MotionGoal, PartialMotionGoal } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
import { useMotion } from "./useMotion";

export function useLinear<T extends MotionGoal>(
	initialValue: T,
	goalValue: PartialMotionGoal<T>,
	valueSource: Source<T>,
	options?: LinearOptions,
) {
	const motion = useMotion(initialValue, valueSource);
	motion.linear(goalValue, options);
	return motion;
}
