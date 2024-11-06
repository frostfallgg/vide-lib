-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local effect = _vide.effect
local source = _vide.source
local function useMouseHover(ref, isEnabled)
	if isEnabled == nil then
		isEnabled = true
	end
	local isHovered = source(false)
	effect(function()
		local instance = ref()
		if instance and isEnabled then
			local mouseIn = instance.MouseEnter:Connect(function()
				return isHovered(true)
			end)
			local mouseOut = instance.MouseLeave:Connect(function()
				return isHovered(false)
			end)
			cleanup(function()
				mouseIn:Disconnect()
				mouseOut:Disconnect()
			end)
		end
	end)
	return isHovered
end
return {
	useMouseHover = useMouseHover,
}
