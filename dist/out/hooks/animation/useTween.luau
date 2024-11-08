-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local useMotion = TS.import(script, script.Parent, "useMotion").useMotion
local function useTween(initialValue, goalValue, valueSource, options)
	local motion = useMotion(initialValue, valueSource)
	motion:tween(goalValue, options)
	return motion
end
return {
	useTween = useTween,
}
