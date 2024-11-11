export interface Theme {
	greys: {
		100: Color3;
		200: Color3;
		300: Color3;
		400: Color3;
		500: Color3;
		600: Color3;
		700: Color3;
		800: Color3;
		900: Color3;
		1000: Color3;
	};
	primary: {
		100: Color3;
		200: Color3;
		300: Color3;
		400: Color3;
		500: Color3;
		600: Color3;
		700: Color3;
	};
	secondary: {
		100: Color3;
		200: Color3;
		300: Color3;
		400: Color3;
		500: Color3;
		600: Color3;
		700: Color3;
	};
	semantic: {
		error: {
			100: Color3;
			200: Color3;
			300: Color3;
			400: Color3;
			500: Color3;
		};
		success: {
			100: Color3;
			200: Color3;
			300: Color3;
			400: Color3;
			500: Color3;
		};
		warning: {
			100: Color3;
			200: Color3;
			300: Color3;
			400: Color3;
			500: Color3;
		};
		info: {
			100: Color3;
			200: Color3;
			300: Color3;
			400: Color3;
			500: Color3;
		};
	};
}

export const Themes = {
	Discord: {
		Dark: {
			1: Color3.fromRGB(56, 58, 64),
			2: Color3.fromRGB(49, 51, 56),
			3: Color3.fromRGB(43, 45, 49),
			4: Color3.fromRGB(35, 36, 40),
			5: Color3.fromRGB(30, 31, 34),
			6: Color3.fromRGB(26, 27, 30),
		},
		White: {
			1: Color3.fromRGB(255, 255, 255),
			2: Color3.fromRGB(219, 222, 225),
			3: Color3.fromRGB(182, 186, 192),
			4: Color3.fromRGB(149, 155, 163),
			5: Color3.fromRGB(129, 132, 141),
		},
		Primary: Color3.fromRGB(91, 100, 235),
		Secondary: Color3.fromRGB(150, 156, 242),

		Success: Color3.fromRGB(77, 162, 97),
		Destructive: Color3.fromRGB(203, 71, 64),
		Notification: Color3.fromRGB(225, 81, 71),
	},
};
