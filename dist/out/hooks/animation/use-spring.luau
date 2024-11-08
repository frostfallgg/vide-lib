-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local useMotion = TS.import(script, script.Parent, "use-motion").useMotion
local function useSpring(initialValue, goalValue, valueSource, options)
	local motion = useMotion(initialValue, valueSource)
	motion:spring(goalValue, options)
	return motion
end
return {
	useSpring = useSpring,
}
