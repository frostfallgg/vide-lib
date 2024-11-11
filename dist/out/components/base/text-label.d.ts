import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface TextLabelProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<TextLabel>;
}
/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextLabel(props: TextLabelProps): Node;
export {};
