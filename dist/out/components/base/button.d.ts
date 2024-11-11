import type { InstanceAttributes, Node } from "@rbxts/vide";
import { type UIObjectsProps } from "../private/ui-objects";
import type { TextProps } from "../private/utility-types";
interface ButtonProps extends UIObjectsProps {
    children?: Node;
    native?: Omit<InstanceAttributes<TextButton>, TextProps>;
}
/**
 * TextButton wrapper with all text properties stripped out.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export declare function Button(props: ButtonProps): Node;
export {};
