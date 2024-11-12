import type { MotionGoal, PartialMotionGoal, SpringOptions } from "@rbxts/ripple";
import type { Source } from "@rbxts/vide";
export declare function useSpring<T extends MotionGoal>(initialValue: T, valueSource: Source<T>, options?: SpringOptions): LuaTuple<[(goal: PartialMotionGoal<T>) => void]>;
