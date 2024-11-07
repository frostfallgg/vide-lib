import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
interface TextButtonProps {
    children?: Node;
    native?: InstanceAttributes<TextButton>;
    settings?: SettingsProps;
}
/**
 * TextButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextButton(props: TextButtonProps): Node;
export {};
