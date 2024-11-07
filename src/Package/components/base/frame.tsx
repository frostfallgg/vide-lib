import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { Settings, type SettingsProps } from "../private/settings";

type FrameProps = InstanceAttributes<Frame> & SettingsProps;

/**
 * Frame wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function Frame(props: FrameProps) {
	return (
		<frame>
			<Settings {...props} />
			{props.children}
		</frame>
	);
}
