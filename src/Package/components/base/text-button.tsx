import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface TextButtonProps {
	children?: Node;
	native?: InstanceAttributes<TextButton>;
	settings?: SettingsProps;
}

/**
 * TextButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function TextButton(props: TextButtonProps) {
	return (
		<textbutton {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</textbutton>
	);
}
