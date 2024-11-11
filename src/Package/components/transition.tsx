// biome-ignore lint/style/useImportType: <explanation>
import Vide from "@rbxts/vide";
import { type Derivable, read, source } from "@rbxts/vide";

interface TransitionProps {
	anchor?: Derivable<Vector2>;
	before?: () => Vide.Node;
	children?: Vide.Node;
	events?: Vide.InstanceEventAttributes<Frame>;
	groupColor?: Derivable<Color3>;
	groupTransparency?: Derivable<number>;
	layoutOrder?: Derivable<number>;
	position?: Derivable<UDim2>;
	rotation?: Derivable<number>;
	size?: Derivable<UDim2>;
	zIndex?: Derivable<number>;
}

export function Transition(props: TransitionProps) {
	const frameRef = source<Frame>();
	const canvasGroupRef = source<CanvasGroup>();

	const transitioning = () => {
		const color = read(props.groupColor) || new Color3(1, 1, 1);
		const transparency = read(props.groupTransparency) ?? 0;

		return transparency > 0.01 || color !== new Color3(1, 1, 1);
	};

	<frame
		BackgroundTransparency={1}
		Size={new UDim2(1, 0, 1, 0)}
		Parent={() => (transitioning() ? canvasGroupRef() : frameRef())}
	>
		{props.children}
	</frame>;

	return (
		<frame
			Name="Transition"
			BackgroundTransparency={1}
			AnchorPoint={props.anchor}
			Size={props.size || new UDim2(1, 0, 1, 0)}
			Position={props.position}
			Rotation={props.rotation}
			LayoutOrder={props.layoutOrder}
			ZIndex={props.zIndex}
			{...props.events}
		>
			<canvasgroup
				action={canvasGroupRef}
				GroupTransparency={props.groupTransparency}
				GroupColor3={props.groupColor}
				BackgroundTransparency={1}
				Size={new UDim2(1, 0, 1, 0)}
			>
				{props.before?.()}
			</canvasgroup>

			<frame action={frameRef} ClipsDescendants BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)}>
				{props.before?.()}
			</frame>
		</frame>
	);
}
