import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type TextLabelProps = InstanceAttributes<TextLabel> & SettingsProps;
/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextLabel(props: TextLabelProps): Vide.Node;
export {};
