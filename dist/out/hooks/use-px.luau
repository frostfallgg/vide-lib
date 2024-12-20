-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Workspace = TS.import(script, TS.getModule(script, "@rbxts", "services")).Workspace
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local source = _vide.source
local BASE_RESOLUTION = Vector2.new(1280, 832)
local MIN_SCALE = 0.5
local DOMINANT_AXIS = 0.5
local scale = source(1)
--[[
	*
	 * Assigns a call signature to an object.
	 *
	 * @param callback The function to assign.
	 * @param object The object to assign the function to.
	 * @returns A callable object.
	 
]]
local function callable(callback, object)
	return setmetatable(object, {
		__call = function(_, ...)
			local args = { ... }
			return callback(unpack(args))
		end,
	})
end
--[[
	*
	 * Rounds and scales a number to the current `px` unit. Includes additional
	 * methods for edge cases.
	 *
	 * @param value The number to scale.
	 * @returns A number in scaled `px` units.
	 
]]
local px = callable(function(value)
	return math.round(value * scale())
end, {
	even = function(value)
		return math.round(value * scale() * 0.5) * 2
	end,
	scale = function(value)
		return value * scale()
	end,
	floor = function(value)
		return math.floor(value * scale())
	end,
	ceil = function(value)
		return math.ceil(value * scale())
	end,
})
--[[
	*
	 * Scales the current `px` unit based on the current viewport size. Should be
	 * called once when mounting the app.
	 
]]
local function usePx()
	local camera = Workspace.CurrentCamera
	local updateScale = function()
		local width = math.log(camera.ViewportSize.X / BASE_RESOLUTION.X, 2)
		local height = math.log(camera.ViewportSize.Y / BASE_RESOLUTION.Y, 2)
		local centered = width + (height - width) * DOMINANT_AXIS
		scale(math.max(2 ^ centered, MIN_SCALE))
	end
	local connection = camera:GetPropertyChangedSignal("ViewportSize"):Connect(function()
		updateScale()
	end)
	cleanup(connection)
	updateScale()
end
return {
	usePx = usePx,
	px = px,
}
