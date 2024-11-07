import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
interface ImageLabelProps {
    children?: Node;
    native?: InstanceAttributes<ImageLabel>;
    settings?: SettingsProps;
}
/**
 * ImageLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ImageLabel(props: ImageLabelProps): Node;
export {};
