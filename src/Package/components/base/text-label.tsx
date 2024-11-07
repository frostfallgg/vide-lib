import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

type TextLabelProps = InstanceAttributes<TextLabel> & SettingsProps;

/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function TextLabel(props: TextLabelProps) {
	return (
		<textlabel>
			<Settings {...props} />
			{props.children}
		</textlabel>
	);
}
