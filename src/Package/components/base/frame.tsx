import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface FrameProps {
	children?: Node;
	native?: InstanceAttributes<Frame>;
	settings?: SettingsProps;
}

/**
 * Frame wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function Frame(props: FrameProps) {
	return (
		<frame {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</frame>
	);
}
