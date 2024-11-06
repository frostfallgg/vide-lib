import Vide, { type Node, type Source } from "@rbxts/vide";

type ContentsContainerProps = {
	children?: Node;
	position: Source<UDim2>;
	size: Source<UDim2>;
};

export function ContentsContainer({ children, position, size }: ContentsContainerProps) {
	const action = (ref: Frame) => {
		ref.GetPropertyChangedSignal("AbsoluteSize").Connect(() => {
			print(ref.AbsoluteSize);
		});
	};

	return (
		<frame
			Size={size}
			Position={position}
			AutomaticSize={"Y"}
			Name={"contents-container"}
			action={action}
			BackgroundTransparency={1}
		>
			{children}
		</frame>
	);
}
