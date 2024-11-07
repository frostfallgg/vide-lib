import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
type TextButtonProps = InstanceAttributes<TextButton> & SettingsProps;
/**
 * TextButton wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function TextButton(props: TextButtonProps): Vide.Node;
export {};
