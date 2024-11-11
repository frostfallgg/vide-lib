import { type InferVideProps, Slider } from "@rbxts/ui-labs";
import Vide, { derive, For } from "@rbxts/vide";
import { Fonts, ScrollableFrame, Themes } from "Package";
import { px } from "Package/hooks/use-px";

const controls = {
	"Element Count": Slider(5, 1, 30, 1),
};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		const labelText = derive(() => {
			const numberStrings: string[] = [];
			const count = props.controls["Element Count"]();
			for (let i = 0; i < count; i++) {
				numberStrings.push(tostring(i));
			}
			return numberStrings;
		});

		return (
			<ScrollableFrame
				position={UDim2.fromScale(0.5, 0.5)}
				size={UDim2.fromOffset(435, 620)}
				anchorPoint={new Vector2(0.5, 0.5)}
			>
				<uilistlayout
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					Padding={new UDim(0, 4)}
					SortOrder={"LayoutOrder"}
				/>
				<For each={labelText}>
					{(item, index) => {
						return (
							<frame
								Size={new UDim2(0.95, 0, 0, 150)}
								BackgroundColor3={Themes.Discord.Dark[1]}
								Name={"card"}
								LayoutOrder={index}
							>
								<textlabel
									Size={UDim2.fromScale(1, 1)}
									Text={item}
									FontFace={Fonts.poppins.medium}
									TextSize={px(52)}
									TextColor3={Themes.Discord.White[1]}
									TextTransparency={0.15}
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
