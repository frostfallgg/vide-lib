import Vide, { derive, read, Show, type Derivable } from "@rbxts/vide";
import { useSource } from "Package/hooks/useSource";
import type { ComponentBase } from "Package/props/ComponentBase";
import { UISlices } from "Package/resources/images";

type Shape = "circle_64" | "circle_128" | "squircle_128" | "squircle_256";

export interface ShapeFrameProps<T extends GuiObject> extends ComponentBase<T> {
	border?: Derivable<boolean>;
	borderColor?: Derivable<Color3>;
	color?: Derivable<Color3>;
	shape: Derivable<Shape>;
}

export function ShapeFrame({
	children,
	border,
	borderColor,
	color,
	shape,
	native,
}: ShapeFrameProps<ImageLabel>) {
	const showBorder = useSource(border);
	const image = derive(() => UISlices[read(shape)].imgShape);
	const borderImage = derive(() => UISlices[read(shape)].imgBorder);
	const slice = derive(() => UISlices[read(shape)].slice);

	return (
		<imagelabel
			{...native}
			Name={"shape-frame"}
			Image={image}
			BackgroundTransparency={1}
			ScaleType={"Slice"}
			SliceCenter={slice}
			SliceScale={1}
			ImageColor3={color}
		>
			<Show when={showBorder}>
				{() => {
					return (
						<imagelabel
							{...native}
							Name={"shape-frame-border"}
							Image={borderImage}
							BackgroundTransparency={1}
							ScaleType={"Slice"}
							SliceCenter={slice}
							SliceScale={1}
							ImageColor3={borderColor}
						/>
					);
				}}
			</Show>
			{children}
		</imagelabel>
	);
}
