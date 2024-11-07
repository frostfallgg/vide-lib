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
	local _attributes = {
		Text = "",
	}
	local _attribute = props.native
	if _attribute then
		for _k, _v in _attribute do
			_attributes[_k] = _v
		end
	end
	local _attributes_1 = {}
	local _attribute_1 = props.settings
	if _attribute_1 then
		for _k, _v in _attribute_1 do
			_attributes_1[_k] = _v
		end
	end
	return Vide.jsx("textbutton", _attributes, Vide.jsx(Settings, _attributes_1), props.children)
end
return {
	Button = Button,
}
