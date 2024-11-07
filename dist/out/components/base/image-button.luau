-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Settings = TS.import(script, script.Parent.Parent, "private", "settings").Settings
--[[
	*
	 * ImageButton wrapper.
	 *
	 * Includes built in uiaspectratio, size constraint, and uiflexitem.
	 *
	 
]]
local function ImageButton(props)
	local _attributes = table.clone(props)
	setmetatable(_attributes, nil)
	return Vide.jsx("imagebutton", nil, Vide.jsx(Settings, _attributes), props.children)
end
return {
	ImageButton = ImageButton,
}
