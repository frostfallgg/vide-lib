import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface ImageLabelProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<ImageLabel>;
}
/**
 * ImageLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ImageLabel(props: ImageLabelProps): Node;
export {};
