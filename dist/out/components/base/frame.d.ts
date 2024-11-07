import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type FrameProps = InstanceAttributes<Frame> & SettingsProps;
/**
 * Frame wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function Frame(props: FrameProps): Vide.Node;
export {};
