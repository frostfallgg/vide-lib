import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface TextButtonProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<TextButton>;
}
/**
 * TextButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextButton(props: TextButtonProps): Node;
export {};
