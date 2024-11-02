-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local effect = _vide.effect
local source = _vide.source
local useMouseHover = TS.import(script, script.Parent, "useMouseHover").useMouseHover
local function useMouseHold(ref, isEnabled)
	if isEnabled == nil then
		isEnabled = true
	end
	local isHolding = source(false)
	local isHovered = useMouseHover(ref, isEnabled)
	local inputEndListener
	local inputStartListener = function(ref)
		return ref.InputBegan:Connect(function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				isHolding(true)
				inputEndListener(ref)
			end
		end)
	end
	inputEndListener = function(ref)
		ref.InputEnded:Once(function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				isHolding(false)
			end
		end)
	end
	effect(function()
		local node = ref()
		if node and isHovered() and isEnabled then
			local inputStart = inputStartListener(node)
			cleanup(function()
				return inputStart:Disconnect()
			end)
		end
	end)
	return isHolding
end
return {
	useMouseHold = useMouseHold,
}
