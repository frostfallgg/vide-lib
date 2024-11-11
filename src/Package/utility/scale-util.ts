
/**
 * Preserve the visial position of an UDim2 when changing the anchor, allows changing the anchor without changing the position.
 *
 * @param position The position of the GuiObject.
 * @param size The size of the GuiObject.
 * @param anchor The anchor of the GuiObject.
 * @param newAnchor The target anchor to compensate for.
 * @returns Adjusted position which compensates for the change in anchor.
 */
export function getCompensateAnchorPosition(
	position: UDim2,
	size: UDim2,
	anchor: Vector2,
	newAnchor: Vector2,
) {
	const deltaAnchor = newAnchor.sub(anchor);
	const newXOffset = position.X.Offset + deltaAnchor.X * size.X.Offset;
	const newXScale = position.X.Scale + deltaAnchor.X * size.X.Scale;
	const newYOffset = position.Y.Offset + deltaAnchor.Y * size.Y.Offset;
	const newYScale = position.Y.Scale + deltaAnchor.Y * size.Y.Scale;

	return new UDim2(newXScale, newXOffset, newYScale, newYOffset);
}
