-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local createMotion = TS.import(script, TS.getModule(script, "@rbxts", "ripple").src).createMotion
local cleanup = TS.import(script, TS.getModule(script, "@rbxts", "vide").src).cleanup
--[[
	*
	 * Creates a motion object that can be used to animate a value, if a motion is in \
	 * progress and a new motion is started, the previous motion is stopped.
	 *
	 * @param valueSource The source of the value to animate.
	 * @param motionType The type of motion to create.
	 * @returns A function to create a motion object and start the animation, a function to cleanup the motion object.
	 
]]
local function useMotion(initialValue, valueSource)
	local motion = createMotion(initialValue, {
		start = false,
	})
	motion:onStep(function(value)
		return valueSource(value)
	end)
	cleanup(function()
		return motion:stop()
	end)
	return motion
end
return {
	useMotion = useMotion,
}
