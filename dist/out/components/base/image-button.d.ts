import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
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
export declare function ImageButton(props: ImageButtonProps): Node;
export {};
