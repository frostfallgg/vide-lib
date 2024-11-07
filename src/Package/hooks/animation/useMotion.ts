import {
	type LinearOptions,
	type Motion,
	type MotionGoal,
	type PartialMotionGoal,
	type SpringOptions,
	type TweenOptions,
	createMotion,
} from "@rbxts/ripple";
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
export function useMotion<T extends MotionGoal, K = TweenOptions | SpringOptions | LinearOptions>(
	valueSource: Source<T>,
	motionType: MotionType,
) {
	let motionHolder: Motion<T> | undefined = undefined;

	const cleanup = () => {
		if (motionHolder) {
			motionHolder.destroy();
			motionHolder = undefined;
		}
	};

	const stopMotion = () => {
		if (motionHolder) {
			motionHolder.stop();
		}
	};

	const startMotion = <U extends PartialMotionGoal<T>>(initialValue: T, goal: U, config?: K) => {
		return new Promise<void>((resolve) => {
			const motion = createMotion(initialValue);

			stopMotion();
			motionHolder = motion;

			switch (motionType) {
				case "tween":
					motion.tween(goal, config as TweenOptions);
					break;
				case "spring":
					motion.spring(goal, config as SpringOptions);
					break;
				case "linear":
					motion.linear(goal, config as LinearOptions);
					break;
				case "immediate":
					motion.immediate(goal);
					break;
			}

			motion.start();
			motion.onStep((value) => {
				valueSource(value);
			});

			motion.onComplete(() => {
				resolve();
			});
		});
	};

	return $tuple(startMotion, cleanup);
}
