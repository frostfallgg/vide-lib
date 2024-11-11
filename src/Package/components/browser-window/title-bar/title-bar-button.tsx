import type { TweenOptions } from "@rbxts/ripple";
import Vide, { effect, source, untrack, type Derivable } from "@rbxts/vide";
import { Button } from "Package/components/base/button";
import { ImageLabel } from "Package/components/base/image-label";
import { useTween } from "Package/hooks/animation/use-tween";

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
	effect(() => {
		if (isHovered()) {
			const backgroundTween = useTween(
				untrack(BackgroundTransparency),
				OnHoverTransparency,
				BackgroundTransparency,
				cfg,
			);
			const iconTween = useTween(untrack(IconTransparency), 0, IconTransparency, cfg);
			backgroundTween.start();
			iconTween.start();
		} else {
			const backgroundTween = useTween(untrack(BackgroundTransparency), 1, BackgroundTransparency, cfg);
			const iconTween = useTween(untrack(IconTransparency), 0.5, IconTransparency, cfg);
			backgroundTween.start();
			iconTween.start();
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
