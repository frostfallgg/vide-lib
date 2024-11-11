import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface ImageButtonProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<ImageButton>;
}
/**
 * ImageButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ImageButton(props: ImageButtonProps): Node;
export {};
