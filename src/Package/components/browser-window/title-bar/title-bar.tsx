import type { Derivable, Source } from "@rbxts/vide";
import Vide, { derive, read, source } from "@rbxts/vide";
import { Themes } from "Package/resources/themes";
import { TitleBarButton } from "./title-bar-button";

interface TitleBarProps {
	CloseBtnHoverColor: Derivable<Color3>;
	CloseCallback: () => void;
	Height: Derivable<number>;
	IconColor: Derivable<Color3>;
	IsHovered: Source<boolean>;
	MinimizeCallback: () => void;
	RestoreCallback: () => void;
	TitleBarColor: Derivable<Color3>;
}

export function TitleBar({
	CloseBtnHoverColor,
	Height,
	IconColor,
	TitleBarColor,
	CloseCallback,
	RestoreCallback,
	MinimizeCallback,
	IsHovered,
}: TitleBarProps) {
	const isWindowMaximized = source(false);
	const windowRestoreImage = derive(() =>
		isWindowMaximized() ? "rbxassetid://123132304035929" : "rbxassetid://90008385056327",
	);

	return (
		<frame
			Name={"title-bar"}
			Size={new UDim2(1, 0, 0, read(Height))}
			BackgroundColor3={TitleBarColor}
			MouseEnter={() => IsHovered(true)}
			MouseLeave={() => IsHovered(false)}
		>
			<uilistlayout FillDirection={"Horizontal"} SortOrder={"LayoutOrder"} HorizontalAlignment={"Right"} />
			<TitleBarButton
				Name="close-btn"
				LayoutOrder={3}
				Callback={CloseCallback}
				Icon="rbxassetid://107348252014204"
				IconColor={IconColor}
				OnHoverBackgroundColor={CloseBtnHoverColor}
				OnHoverTransparency={0.1}
			/>
			<TitleBarButton
				Name="toggle-btn"
				LayoutOrder={2}
				Callback={RestoreCallback}
				Icon={windowRestoreImage}
				IconColor={IconColor}
				OnHoverBackgroundColor={Themes.Discord.White[2]}
				OnHoverTransparency={0.9}
			/>
			<TitleBarButton
				Name="minimise-btn"
				LayoutOrder={1}
				Callback={MinimizeCallback}
				Icon="rbxassetid://110217920726785"
				IconColor={IconColor}
				OnHoverBackgroundColor={Themes.Discord.White[2]}
				OnHoverTransparency={0.9}
			/>
		</frame>
	);
}
