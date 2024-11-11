import { type Derivable, Show, read } from "@rbxts/vide";
import Vide from "@rbxts/vide";

export interface UIObjectsProps {
	aspectRatio?: Derivable<number>;
	aspectRatioConstraint?: Derivable<"Height" | "Width">;
	cornerRadius?: Derivable<number>;
	flexItemLineAlign?: Derivable<"Automatic" | "Center" | "End" | "Start" | "Stretch">;
	flexMode?: Derivable<"None" | "Grow" | "Shrink">;
	maxSize?: Derivable<Vector2>;
	minSize?: Derivable<Vector2>;
}

export function UIObjects(props: UIObjectsProps) {
	return (
		<>
			<Show when={() => read(props.aspectRatio) !== undefined}>
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
			<Show when={() => read(props.cornerRadius) !== undefined}>
				{() => {
					return <uicorner CornerRadius={new UDim(0, read(props.cornerRadius))} />;
				}}
			</Show>
		</>
	);
}
