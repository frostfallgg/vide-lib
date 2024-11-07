import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type ImageLabelProps = InstanceAttributes<ImageLabel> & SettingsProps;
/**
 * ImageLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ImageLabel(props: ImageLabelProps): Vide.Node;
export {};
