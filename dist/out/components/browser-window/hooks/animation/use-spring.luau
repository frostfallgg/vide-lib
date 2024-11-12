-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local useMotion = TS.import(script, script.Parent, "use-motion").useMotion
local function useSpring(initialValue, valueSource, options)
	local motion = useMotion(initialValue, valueSource)
	local function animate(goal)
		motion:spring(goal, options)
	end
	return animate
end
return {
	useSpring = useSpring,
}
