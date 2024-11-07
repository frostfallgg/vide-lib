import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type ScrollingFrameProps = InstanceAttributes<ScrollingFrame> & SettingsProps;
/**
 * ScrollingFrame wrapper.
 *
 * Sets some sensible defaults, for example automatic canvas size so the thumb disappears.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function ScrollingFrame(props: ScrollingFrameProps): Vide.Node;
export {};
