import type { InstanceAttributes, Node } from "@rbxts/vide";
import Vide from "@rbxts/vide";
import { UIObjects, type UIObjectsProps } from "../private/ui-objects";

interface TextLabelProps extends UIObjectsProps {
	children?: Node;
	native?: InstanceAttributes<TextLabel>;
}

/**
 * TextLabel wrapper.
 *
 * Includes built in uiaspectratio, size constraint, and uiflexitem.
 *
 */
export function TextLabel(props: TextLabelProps) {
	return (
		<textlabel {...props.native}>
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
		</textlabel>
	);
}
