-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local createMotion = TS.import(script, TS.getModule(script, "@rbxts", "ripple").src).createMotion
local cleanup = TS.import(script, TS.getModule(script, "@rbxts", "vide").src).cleanup
local function useMotion(initialValue, valueSource)
	local motion = createMotion(initialValue, {
		start = true,
	})
	motion:onStep(function(value)
		return valueSource(value)
	end)
	cleanup(function()
		return motion:destroy()
	end)
	return motion
end
return {
	useMotion = useMotion,
}
