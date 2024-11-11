import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
interface ScrollingFrameProps extends UIObjectsProps {
    children?: Node;
    native?: InstanceAttributes<ScrollingFrame>;
}
/**
 * ScrollingFrame wrapper.
 *
 * Sets some sensible defaults, for example automatic canvas size so the thumb disappears.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ScrollingFrame(props: ScrollingFrameProps): Node;
export {};
