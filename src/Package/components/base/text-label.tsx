import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface TextLabelProps {
	children?: Node;
	native?: InstanceAttributes<TextLabel>;
	settings?: SettingsProps;
}

/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function TextLabel(props: TextLabelProps) {
	return (
		<textlabel {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</textlabel>
	);
}
