import type { InferVideProps } from "@rbxts/ui-labs";
import Vide, { For, source } from "@rbxts/vide";
import { Fonts, ScrollableFrame } from "Package";
import { px } from "Package/hooks/use-px";

const controls = {};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		const letters = source([
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		]);

		return (
			<ScrollableFrame
				position={UDim2.fromScale(0.5, 0.5)}
				size={UDim2.fromScale(0.45, 0.9)}
				anchorPoint={new Vector2(0.5, 0.5)}
				color={Color3.fromRGB(49, 51, 56)}
			>
				<uilistlayout FillDirection={"Vertical"} Padding={new UDim(0, 4)} SortOrder={"LayoutOrder"} />
				<For each={letters}>
					{(item, index) => {
						return (
							<frame
								Size={new UDim2(1, 0, 0, 150)}
								BackgroundColor3={Color3.fromRGB(112, 28, 28)}
								Name={"card"}
								LayoutOrder={index}
							>
								<textlabel
									Size={UDim2.fromScale(1, 1)}
									Text={item}
									FontFace={Fonts.poppins.medium}
									TextSize={px(52)}
									TextColor3={Color3.fromRGB(255, 255, 255)}
									BackgroundTransparency={1}
								/>
							</frame>
						);
					}}
				</For>
			</ScrollableFrame>
		);
	},
};

export = story;
