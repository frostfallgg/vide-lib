-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Settings = TS.import(script, script.Parent.Parent, "private", "settings").Settings
--[[
	*
	 * TextButton wrapper with all text properties stripped out.
	 *
	 * Includes built in uiaspectratio, size constraint, and uiflexitem.
	 *
	 
]]
local function Button(props)
	local _attributes = table.clone(props)
	setmetatable(_attributes, nil)
	return Vide.jsx("textbutton", {
		Text = "",
	}, Vide.jsx(Settings, _attributes), props.children)
end
return {
	Button = Button,
}
