import type { InstanceAttributes } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { type SettingsProps } from "../private/settings";
import type { TextProps } from "../private/utility-types";
type ButtonProps = Omit<InstanceAttributes<TextButton>, TextProps> & SettingsProps;
/**
 * TextButton wrapper with all text properties stripped out.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function Button(props: ButtonProps): Vide.Node;
export {};
