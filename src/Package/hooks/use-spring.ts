import type { MotionGoal, PartialMotionGoal, SpringOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
import { useMotion } from "./use-motion";

export function useSpring<T extends MotionGoal>(
	initialValue: T,
	valueSource: Source<T>,
	options?: SpringOptions,
) {
	const motion = useMotion(initialValue, valueSource);

	function animate(goal: PartialMotionGoal<T>) {
		motion.spring(goal, options);
	}
	return $tuple(animate);
}
