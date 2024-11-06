export interface ShapeSlice {
	imgBorder: string;
	imgShape: string;
	slice: Rect;
}

export const UISlices: Record<string, ShapeSlice> = {
	circle_128: {
		imgShape: "rbxassetid://80656318532714",
		imgBorder: "rbxassetid://78587144663493",
		slice: new Rect(64, 64, 64, 64),
	},
	circle_64: {
		imgShape: "rbxassetid://79758057974517",
		imgBorder: "rbxassetid://134985527057127",
		slice: new Rect(32, 32, 32, 32),
	},
	squircle_256: {
		imgShape: "rbxassetid://92487561509421",
		imgBorder: "rbxassetid://97120804420482",
		slice: new Rect(128, 128, 128, 128),
	},
	squircle_128: {
		imgShape: "rbxassetid://75701425155428",
		imgBorder: "rbxassetid://83797009942708",
		slice: new Rect(64, 64, 64, 64),
	},
};
