-- Compiled with roblox-ts v3.0.0
--[[
	*
	 * Preserve the visial position of an UDim2 when changing the anchor, allows changing the anchor without changing the position.
	 *
	 * @param position The position of the GuiObject.
	 * @param size The size of the GuiObject.
	 * @param anchor The anchor of the GuiObject.
	 * @param newAnchor The target anchor to compensate for.
	 * @returns Adjusted position which compensates for the change in anchor.
	 
]]
local function getCompensateAnchorPosition(position, size, anchor, newAnchor)
	local _newAnchor = newAnchor
	local _anchor = anchor
	local deltaAnchor = _newAnchor - _anchor
	local newXOffset = position.X.Offset + deltaAnchor.X * size.X.Offset
	local newXScale = position.X.Scale + deltaAnchor.X * size.X.Scale
	local newYOffset = position.Y.Offset + deltaAnchor.Y * size.Y.Offset
	local newYScale = position.Y.Scale + deltaAnchor.Y * size.Y.Scale
	return UDim2.new(newXScale, newXOffset, newYScale, newYOffset)
end
return {
	getCompensateAnchorPosition = getCompensateAnchorPosition,
}
