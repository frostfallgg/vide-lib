-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Show = _vide.Show
local read = _vide.read
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local function Settings(props)
	return Vide.jsx(Vide.Fragment, nil, Vide.jsx(Show, {
		when = function()
			return read(props.aspectRatioConstraint) ~= nil
		end,
	}, function()
		return Vide.jsx("uiaspectratioconstraint", {
			AspectRatio = props.aspectRatio,
			DominantAxis = props.aspectRatioConstraint,
		})
	end), Vide.jsx(Show, {
		when = function()
			return read(props.flexMode) ~= nil
		end,
	}, function()
		return Vide.jsx("uiflexitem", {
			FlexMode = props.flexMode,
			ItemLineAlignment = props.flexItemLineAlign,
		})
	end), Vide.jsx(Show, {
		when = function()
			return read(props.maxSize) ~= nil or read(props.minSize) ~= nil
		end,
	}, function()
		return Vide.jsx("uisizeconstraint", {
			MaxSize = props.maxSize,
			MinSize = props.minSize,
		})
	end))
end
return {
	Settings = Settings,
}
