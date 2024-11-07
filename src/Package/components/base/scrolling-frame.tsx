import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface ScrollingFrameProps {
	children?: Node;
	native?: InstanceAttributes<ScrollingFrame>;
	settings?: SettingsProps;
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
			<Settings {...props} />
			{props.children}
		</scrollingframe>
	);
}
