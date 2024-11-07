import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

type TextButtonProps = InstanceAttributes<TextButton> & SettingsProps;

/**
 * TextButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function TextButton(props: TextButtonProps) {
	return (
		<textbutton>
			<Settings {...props} />
			{props.children}
		</textbutton>
	);
}
