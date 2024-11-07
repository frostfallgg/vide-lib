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
	local _attributes_1 = table.clone(props)
	setmetatable(_attributes_1, nil)
	return Vide.jsx("imagebutton", _attributes, Vide.jsx(Settings, _attributes_1), props.children)
end
return {
	ImageButton = ImageButton,
}
