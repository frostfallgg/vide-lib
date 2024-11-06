-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local createMotion = TS.import(script, TS.getModule(script, "@rbxts", "ripple").src).createMotion
local function useAutoMotion(valueSource, motionType)
	local motionHolder = nil
	local cleanup = function()
		if motionHolder then
			motionHolder:destroy()
			motionHolder = nil
		end
	end
	local stopMotion = function()
		if motionHolder then
			motionHolder:stop()
		end
	end
	local startMotion = function(initialValue, goal, config)
		return TS.Promise.new(function(resolve)
			local motion = createMotion(initialValue)
			stopMotion()
			motionHolder = motion
			repeat
				if motionType == "tween" then
					motion:tween(goal, config)
					break
				end
				if motionType == "spring" then
					motion:spring(goal, config)
					break
				end
				if motionType == "linear" then
					motion:linear(goal, config)
					break
				end
				if motionType == "immediate" then
					motion:immediate(goal)
					break
				end
			until true
			motion:start()
			motion:onStep(function(value)
				valueSource(value)
			end)
			motion:onComplete(function()
				resolve()
			end)
		end)
	end
	return startMotion, cleanup
end
return {
	useAutoMotion = useAutoMotion,
}
