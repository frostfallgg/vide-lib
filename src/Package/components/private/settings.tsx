import { type Derivable, Show, read } from "@rbxts/vide";
import Vide from "@rbxts/vide";

export interface SettingsProps {
	aspectRatio?: Derivable<number>;
	aspectRatioConstraint?: Derivable<"Height" | "Width">;
	flexItemLineAlign?: Derivable<"Automatic" | "Center" | "End" | "Start" | "Stretch">;
	flexMode?: Derivable<"None" | "Grow" | "Shrink">;
	maxSize?: Derivable<Vector2>;
	minSize?: Derivable<Vector2>;
}

export function Settings(props: SettingsProps) {
	return (
		<>
			<Show when={() => read(props.aspectRatioConstraint) !== undefined}>
				{() => {
					return (
						<uiaspectratioconstraint
							AspectRatio={props.aspectRatio}
							DominantAxis={props.aspectRatioConstraint}
						/>
					);
				}}
			</Show>
			<Show when={() => read(props.flexMode) !== undefined}>
				{() => {
					return <uiflexitem FlexMode={props.flexMode} ItemLineAlignment={props.flexItemLineAlign} />;
				}}
			</Show>
			<Show when={() => read(props.maxSize) !== undefined || read(props.minSize) !== undefined}>
				{() => {
					return <uisizeconstraint MaxSize={props.maxSize} MinSize={props.minSize} />;
				}}
			</Show>
		</>
	);
}
