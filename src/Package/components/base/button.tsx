import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { UIObjects, type UIObjectsProps } from "../private/ui-objects";
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
export function Button(props: ButtonProps) {
	return (
		<textbutton Text="" {...props.native}>
			<UIObjects
				aspectRatio={props.aspectRatio}
				aspectRatioConstraint={props.aspectRatioConstraint}
				cornerRadius={props.cornerRadius}
				flexItemLineAlign={props.flexItemLineAlign}
				flexMode={props.flexMode}
				maxSize={props.maxSize}
				minSize={props.minSize}
			/>
			{props.children}
		</textbutton>
	);
}
