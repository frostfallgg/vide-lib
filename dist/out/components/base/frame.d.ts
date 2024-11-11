import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface FrameProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<Frame>;
}
/**
 * Frame wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function Frame(props: FrameProps): Node;
export {};
