import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

type ImageButtonProps = InstanceAttributes<ImageButton> & SettingsProps;

/**
 * ImageButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function ImageButton(props: ImageButtonProps) {
	return (
		<imagebutton {...props}>
			<Settings {...props} />
			{props.children}
		</imagebutton>
	);
}
