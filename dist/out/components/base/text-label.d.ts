import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
interface TextLabelProps {
    children?: Node;
    native?: InstanceAttributes<TextLabel>;
    settings?: SettingsProps;
}
/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextLabel(props: TextLabelProps): Node;
export {};
