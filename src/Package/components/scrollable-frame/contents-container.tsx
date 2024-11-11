import Vide, { cleanup, type Node, type Source } from "@rbxts/vide";

type ContentsContainerProps = {
	children?: Node;
	position: Source<UDim2>;
	size: Source<UDim2>;
	contentSizeOut: Source<Vector2>;
};

export function ContentsContainer({
	children,
	position,
	size,
	contentSizeOut: contentSizeSource,
}: ContentsContainerProps) {
	function containerAction(ref: Frame) {
		const connection = ref
			.GetPropertyChangedSignal("AbsoluteSize")
			.Connect(() => contentSizeSource(ref.AbsoluteSize));
		cleanup(() => connection.Disconnect());
	}

	return (
		<frame
			Size={size}
			Position={position}
			AutomaticSize={"Y"}
			Name={"contents-container"}
			action={containerAction}
			BackgroundTransparency={1}
		>
			{children}
		</frame>
	);
}
