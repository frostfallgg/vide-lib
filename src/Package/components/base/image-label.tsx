import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

type ImageLabelProps = InstanceAttributes<ImageLabel> & SettingsProps;

/**
 * ImageLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function ImageLabel(props: ImageLabelProps) {
	return (
		<imagelabel>
			<Settings {...props} />
			{props.children}
		</imagelabel>
	);
}
