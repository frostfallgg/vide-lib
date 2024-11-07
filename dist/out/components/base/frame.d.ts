import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
interface FrameProps {
    children?: Node;
    native?: InstanceAttributes<Frame>;
    settings?: SettingsProps;
}
/**
 * Frame wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function Frame(props: FrameProps): Node;
export {};
