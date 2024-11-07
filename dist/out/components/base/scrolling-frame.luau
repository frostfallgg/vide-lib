-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Settings = TS.import(script, script.Parent.Parent, "private", "settings").Settings
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
	local _attributes_1 = table.clone(props)
	setmetatable(_attributes_1, nil)
	return Vide.jsx("scrollingframe", _attributes, Vide.jsx(Settings, _attributes_1), props.children)
end
return {
	ScrollingFrame = ScrollingFrame,
}
