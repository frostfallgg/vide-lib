import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";
import type { TextProps } from "../private/utility-types";

interface ButtonProps {
	children?: Node;
	native?: Omit<InstanceAttributes<TextButton>, TextProps>;
	settings?: SettingsProps;
}

/**
 * TextButton wrapper with all text properties stripped out.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function Button(props: ButtonProps) {
	return (
		<textbutton Text="" {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</textbutton>
	);
}
