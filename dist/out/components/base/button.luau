-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local UIObjects = TS.import(script, script.Parent.Parent, "private", "ui-objects").UIObjects
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
	return Vide.jsx("textbutton", _attributes, Vide.jsx(UIObjects, {
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
	Button = Button,
}
