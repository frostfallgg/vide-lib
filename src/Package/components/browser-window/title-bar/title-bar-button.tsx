import { type TweenOptions, config } from "@rbxts/ripple";
import Vide, { effect, source, type Derivable } from "@rbxts/vide";
import { Button } from "Package/components/base/button";
import { ImageLabel } from "Package/components/base/image-label";
import { useSpring } from "../hooks/animation/use-spring";

interface TitleBarButtonProps {
	Callback: () => void;
	Icon: Derivable<string>;
	IconColor: Derivable<Color3>;
	LayoutOrder: number;
	Name?: string;
	OnHoverBackgroundColor: Derivable<Color3>;
	OnHoverTransparency: number;
}

export function TitleBarButton({
	Name,
	Callback,
	Icon,
	IconColor,
	OnHoverBackgroundColor,
	LayoutOrder,
	OnHoverTransparency,
}: TitleBarButtonProps) {
	const isHovered = source(false);
	const BackgroundTransparency = source(1);
	const IconTransparency = source(0.5);

	const cfg: TweenOptions = {
		time: 0.1,
	};

	const [bgTransparencyMotion] = useSpring(1, BackgroundTransparency, config.spring.stiff);
	const [iconTransparencyMotion] = useSpring(0.5, IconTransparency, config.spring.stiff);

	effect(() => {
		if (isHovered()) {
			bgTransparencyMotion(OnHoverTransparency);
			iconTransparencyMotion(0);
		} else {
			bgTransparencyMotion(1);
			iconTransparencyMotion(0.5);
		}
	});

	return (
		<Button
			native={{
				Name,
				LayoutOrder,
				BackgroundTransparency,
				MouseEnter: () => isHovered(true),
				MouseLeave: () => isHovered(false),
				Size: UDim2.fromScale(1, 1),
				BackgroundColor3: OnHoverBackgroundColor,
				Activated: Callback,
			}}
			aspectRatio={1.5}
			aspectRatioConstraint={"Height"}
		>
			<ImageLabel
				native={{
					Image: Icon,
					BackgroundColor3: IconColor,
					AnchorPoint: new Vector2(0.5, 0.5),
					Position: UDim2.fromScale(0.5, 0.5),
					Size: UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency: 1,
					ImageTransparency: IconTransparency,
				}}
				aspectRatio={1}
				aspectRatioConstraint={"Height"}
			/>
		</Button>
	);
}
