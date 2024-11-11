import { Workspace } from "@rbxts/services";
import { source } from "@rbxts/vide";

export function useViewport() {
	const camera = Workspace.CurrentCamera;
	if (!camera) {
		warn("No camera found");
		return;
	}
	camera.GetPropertyChangedSignal("ViewportSize").Connect(() => {
		viewportSize(camera.ViewportSize);
	});
	viewportSize(camera.ViewportSize);
}

export function viewport() {
	return viewportSize();
}

const viewportSize = source<Vector2>(new Vector2(0, 0));
