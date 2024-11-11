import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { UIObjects, type UIObjectsProps } from "../private/ui-objects";

interface ScrollingFrameProps extends UIObjectsProps {
	children?: Node;
	native?: InstanceAttributes<ScrollingFrame>;
}

/**
 * ScrollingFrame wrapper.
 *
 * Sets some sensible defaults, for example automatic canvas size so the thumb disappears.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function ScrollingFrame(props: ScrollingFrameProps) {
	return (
		<scrollingframe AutomaticCanvasSize={"XY"} CanvasSize={UDim2.fromScale(0, 0)} {...props}>
			<UIObjects
				aspectRatio={props.aspectRatio}
				aspectRatioConstraint={props.aspectRatioConstraint}
				cornerRadius={props.cornerRadius}
				flexItemLineAlign={props.flexItemLineAlign}
				flexMode={props.flexMode}
				maxSize={props.maxSize}
				minSize={props.minSize}
			/>
			{props.children}
		</scrollingframe>
	);
}
