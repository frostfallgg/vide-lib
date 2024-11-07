-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Settings = TS.import(script, script.Parent.Parent, "private", "settings").Settings
--[[
	*
	 * ImageLabel wrapper.
	 *
	 * Includes built in uiaspectratio, size constraint, and uiflexitem.
	 *
	 
]]
local function ImageLabel(props)
	local _attributes = table.clone(props)
	setmetatable(_attributes, nil)
	return Vide.jsx("imagelabel", nil, Vide.jsx(Settings, _attributes), props.children)
end
return {
	ImageLabel = ImageLabel,
}
