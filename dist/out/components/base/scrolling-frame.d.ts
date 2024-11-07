import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
interface ScrollingFrameProps {
    children?: Node;
    native?: InstanceAttributes<ScrollingFrame>;
    settings?: SettingsProps;
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
