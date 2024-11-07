import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface ImageLabelProps {
	children?: Node;
	native?: InstanceAttributes<ImageLabel>;
	settings?: SettingsProps;
}

/**
 * ImageLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function ImageLabel(props: ImageLabelProps) {
	return (
		<imagelabel {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</imagelabel>
	);
}
