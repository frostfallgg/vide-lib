import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type ImageButtonProps = InstanceAttributes<ImageButton> & SettingsProps;
/**
 * ImageButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ImageButton(props: ImageButtonProps): Vide.Node;
export {};
