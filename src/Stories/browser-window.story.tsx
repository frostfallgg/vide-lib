import type { InferVideProps } from "@rbxts/ui-labs";
import Vide, { source } from "@rbxts/vide";
import { BrowserWindow } from "Package/components/browser-window/browser-window";

const controls = {};

const story = {
	vide: Vide,
	controls,
	story: (props: InferVideProps<typeof controls>) => {
		const isOpen = source(true);

		return <BrowserWindow isOpen={isOpen} />;
	},
};

export = story;
