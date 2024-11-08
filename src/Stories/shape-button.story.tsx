import { Choose, type InferVideProps } from "@rbxts/ui-labs";
import Vide, { derive, effect, source } from "@rbxts/vide";
import { Fonts } from "Package";
import { ShapeButton } from "Package/components/shape-button";
import { px } from "Package/hooks/use-px";

const DEFAULT_COLOR = Color3.fromHex("#4064F7");
const HOVERED_COLOR = Color3.fromHex("#549F93");

const controls = {
	Shape: Choose(["circle_64", "circle_128", "squircle_128", "squircle_256"]),
};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		const isHovered = source(false);
		const bgColor = source(DEFAULT_COLOR);
		const counter = source(0);
		const text = derive(() => `Counter: ${counter()}`);

		effect(() => {
			if (isHovered()) {
				bgColor(HOVERED_COLOR);
			} else {
				bgColor(DEFAULT_COLOR);
			}
		});

		return (
			<ShapeButton
				shape={props.controls.Shape}
				native={{
					Size: UDim2.fromOffset(500, 200),
					AnchorPoint: new Vector2(0.5, 0.5),
					Position: UDim2.fromScale(0.5, 0.5),
					MouseEnter: () => isHovered(true),
					MouseLeave: () => isHovered(false),
				}}
				onClick={() => counter(counter() + 1)}
				color={bgColor}
			>
				<textlabel
					Size={UDim2.fromScale(1, 1)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Text={text}
					TextSize={px(52)}
					FontFace={Fonts.poppins.medium}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
				/>
			</ShapeButton>
		);
	},
};

export = story;
