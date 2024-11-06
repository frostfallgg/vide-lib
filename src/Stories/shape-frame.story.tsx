import { Choose, type InferVideProps, RGBA } from "@rbxts/ui-labs";
import Vide from "@rbxts/vide";
import { ShapeFrame } from "Package/components/shape-frame";

const controls = {
	Color: RGBA(Color3.fromHex("#4064F7")),
	Shape: Choose(["circle_64", "circle_128", "squircle_128", "squircle_256"]),
	Border: true,
	BorderColor: RGBA(Color3.fromHex("#50514F")),
};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		return (
			<ShapeFrame
				shape={props.controls.Shape}
				native={{
					Size: UDim2.fromOffset(500, 200),
					AnchorPoint: new Vector2(0.5, 0.5),
					Position: UDim2.fromScale(0.5, 0.5),
				}}
				color={props.controls.Color().Color}
				border={props.controls.Border}
				borderColor={props.controls.BorderColor().Color}
			/>
		);
	},
};

export = story;
