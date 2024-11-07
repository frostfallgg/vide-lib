-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local function SimplePadding(_param)
	local padding = _param.padding
	local paddingValue = padding or UDim.new(0, 4)
	return Vide.jsx("uipadding", {
		PaddingBottom = paddingValue,
		PaddingLeft = paddingValue,
		PaddingRight = paddingValue,
		PaddingTop = paddingValue,
	})
end
return {
	SimplePadding = SimplePadding,
}
