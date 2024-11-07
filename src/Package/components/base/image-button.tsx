import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

interface ImageButtonProps {
	children?: Node;
	native?: InstanceAttributes<ImageButton>;
	settings?: SettingsProps;
}

/**
 * ImageButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function ImageButton(props: ImageButtonProps) {
	return (
		<imagebutton {...props.native}>
			<Settings {...props.settings} />
			{props.children}
		</imagebutton>
	);
}
