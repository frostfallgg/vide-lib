-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local UIObjects = TS.import(script, script.Parent.Parent, "private", "ui-objects").UIObjects
--[[
	*
	 * ScrollingFrame wrapper.
	 *
	 * Sets some sensible defaults, for example automatic canvas size so the thumb disappears.
	 *
	 * Includes built in uiaspectratio, size constraint, and uiflexitem.
	 *
	 
]]
local function ScrollingFrame(props)
	local _attributes = {
		AutomaticCanvasSize = "XY",
		CanvasSize = UDim2.fromScale(0, 0),
	}
	for _k, _v in props do
		_attributes[_k] = _v
	end
	return Vide.jsx("scrollingframe", _attributes, Vide.jsx(UIObjects, {
		aspectRatio = props.aspectRatio,
		aspectRatioConstraint = props.aspectRatioConstraint,
		cornerRadius = props.cornerRadius,
		flexItemLineAlign = props.flexItemLineAlign,
		flexMode = props.flexMode,
		maxSize = props.maxSize,
		minSize = props.minSize,
	}), props.children)
end
return {
	ScrollingFrame = ScrollingFrame,
}
