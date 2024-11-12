import Vide, { Show, source, type Derivable, type Node, type Source } from "@rbxts/vide";
import { px } from "Package/hooks/use-px";
import { useSource } from "Package/hooks/use-source";
import { Themes } from "Package/resources/themes";
import { Transition } from "../transition";
import { useDragMove } from "./hooks/use-drag-move";
import { ResizeHandle } from "./resize-handle";
import { TitleBar } from "./title-bar/title-bar";

type BrowserWindowProps = {
	size?: Derivable<UDim2>;
	position?: Derivable<UDim2>;
	anchorPoint?: Derivable<Vector2>;
	backgroundColor?: Derivable<Color3>;
	titleBarColor?: Derivable<Color3>;
	closeBtnHoverColor?: Derivable<Color3>;
	iconColor?: Derivable<Color3>;
	isOpen: Source<boolean>;
	isMinimized?: Source<boolean>;
	isMaximized?: Source<boolean>;
	children?: Node;
};

export function BrowserWindow({
	size = new UDim2(0, 520, 0, 635),
	position = new UDim2(0.5, 0, 0.5, 0),
	anchorPoint = new Vector2(0.5, 0.5),
	backgroundColor = Themes.Discord.Dark[2],
	titleBarColor = Themes.Discord.Dark[4],
	closeBtnHoverColor = Themes.Discord.Destructive,
	iconColor = Themes.Discord.White[1],
	isOpen,
	children,
}: BrowserWindowProps) {
	const frameRef = source<Frame>();

	const isTitleBarHovered = source(false);

	const titleBarHeight = source(px(32));

	const browserPosition = useSource(position);
	const browserSize = useSource(size);
	const browserAnchorPoint = useSource(anchorPoint);

	useDragMove(isTitleBarHovered, browserPosition);

	function closeBrowser() {
		isOpen(false);
	}
	function restoreBrowser() {}
	function minimizeBrowser() {}

	const isTransitioning = source(false);

	return (
		<Show when={isOpen}>
			{() => {
				return (
					<Transition>
						<frame
							Name={"browser-window"}
							Size={browserSize}
							Position={browserPosition}
							AnchorPoint={browserAnchorPoint}
							BackgroundTransparency={1}
							action={(ref) => frameRef(ref)}
						>
							<TitleBar
								Height={titleBarHeight}
								TitleBarColor={titleBarColor}
								IconColor={iconColor}
								CloseBtnHoverColor={closeBtnHoverColor}
								CloseCallback={closeBrowser}
								RestoreCallback={restoreBrowser}
								MinimizeCallback={minimizeBrowser}
								IsHovered={isTitleBarHovered}
							/>
							<frame
								Name={"contents-container"}
								Size={new UDim2(1, 0, 1, -titleBarHeight())}
								Position={new UDim2(0, 0, 0, titleBarHeight())}
								BackgroundColor3={backgroundColor}
							>
								{children}
							</frame>
							<ResizeHandle
								color={Themes.Discord.White[1]}
								parentPosition={browserPosition}
								parentSize={browserSize}
								parentAnchor={browserAnchorPoint}
							/>
						</frame>
					</Transition>
				);
			}}
		</Show>
	);
}
