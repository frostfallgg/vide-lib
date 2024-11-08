import type { MotionGoal, PartialMotionGoal, TweenOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
import { useMotion } from "./useMotion";

export function useTween<T extends MotionGoal>(
	initialValue: T,
	goalValue: PartialMotionGoal<T>,
	valueSource: Source<T>,
	options?: TweenOptions,
) {
	const motion = useMotion(initialValue, valueSource);
	motion.tween(goalValue, options);
	return motion;
}
