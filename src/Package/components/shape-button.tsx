import Vide, { derive, read, Show } from "@rbxts/vide";
import { useSource } from "Package/hooks/use-source";
import { UISlices } from "Package/resources/images";
import type { ShapeFrameProps } from "./shape-frame";

interface ShapeButtonProps extends ShapeFrameProps<ImageButton> {
	onClick?: () => void;
}

export function ShapeButton({
	children,
	border,
	borderColor,
	color,
	shape,
	onClick,
	native,
}: ShapeButtonProps) {
	const showBorder = useSource(border);
	const image = derive(() => UISlices[read(shape)].imgShape);
	const borderImage = derive(() => UISlices[read(shape)].imgBorder);
	const slice = derive(() => UISlices[read(shape)].slice);

	return (
		<imagebutton
			{...native}
			Name={"shape-frame"}
			Image={image}
			BackgroundTransparency={1}
			ScaleType={"Slice"}
			SliceCenter={slice}
			SliceScale={1}
			ImageColor3={color}
			Activated={onClick}
		>
			<Show when={showBorder}>
				{() => {
					return (
						// This should really be a label but that makes props awakward
						// Instead just use an imagebutton and disable it
						<imagebutton
							{...native}
							Name={"shape-frame-border"}
							Image={borderImage}
							BackgroundTransparency={1}
							ScaleType={"Slice"}
							SliceCenter={slice}
							SliceScale={1}
							ImageColor3={borderColor}
							Active={false}
						/>
					);
				}}
			</Show>
			{children}
		</imagebutton>
	);
}
