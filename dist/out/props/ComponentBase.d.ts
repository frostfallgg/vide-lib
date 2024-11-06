import type { InstanceAttributes, Node } from "@rbxts/vide";
export interface ComponentBase<T extends GuiObject> {
    children?: Node;
    native?: InstanceAttributes<T>;
}
