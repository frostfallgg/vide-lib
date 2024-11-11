-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local ContextActionService = TS.import(script, TS.getModule(script, "@rbxts", "services")).ContextActionService
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local effect = _vide.effect
local untrack = _vide.untrack
-- TODO: Add support for gamepad and touch
local PIXELS_PER_SCROLL
local function useScrollInput(maximumThumbPosition, isHovered, thumbPosition)
	local function scrollHandler(actionName, state, input)
		if input.UserInputType == Enum.UserInputType.MouseWheel then
			local scrollDir = input.Position.Z
			local currentPosition = untrack(thumbPosition)
			local currX = currentPosition.X
			local currY = currentPosition.Y
			local newY = math.clamp(currY.Offset - scrollDir * PIXELS_PER_SCROLL, 0, maximumThumbPosition())
			thumbPosition(UDim2.new(currX.Scale, currX.Offset, currY.Scale, newY))
		end
		return Enum.ContextActionResult.Sink
	end
	effect(function()
		if isHovered() then
			ContextActionService:BindAction("GuiScroll", scrollHandler, false, Enum.UserInputType.MouseWheel)
			cleanup(function()
				return ContextActionService:UnbindAction("GuiScroll")
			end)
		end
	end)
end
PIXELS_PER_SCROLL = 20
return {
	useScrollInput = useScrollInput,
}
