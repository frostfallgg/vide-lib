-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local useMotion = TS.import(script, script.Parent, "use-motion").useMotion
local function useLinear(initialValue, goalValue, valueSource, options)
	local motion = useMotion(initialValue, valueSource)
	motion:linear(goalValue, options)
	return motion
end
return {
	useLinear = useLinear,
}
