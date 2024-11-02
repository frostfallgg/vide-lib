import type { InferVideProps } from "@rbxts/ui-labs";
import Vide from "@rbxts/vide";

const controls = {};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		//
	},
};

export = story;
