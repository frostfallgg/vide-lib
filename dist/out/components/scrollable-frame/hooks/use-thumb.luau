-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local RunService = _services.RunService
local UserInputService = _services.UserInputService
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local effect = _vide.effect
local source = _vide.source
local untrack = _vide.untrack
local VALID_MOUSE_BUFFER
local function useThumb(maximumThumbPosition, isThumbHovered)
	local thumbPosition = source(UDim2.new(0.5, 0, 0, 0))
	local isDragging = source(false)
	local isOutsideTrack = source(false)
	local function clickListener()
		return UserInputService.InputBegan:Connect(function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				isDragging(true)
				isOutsideTrack(false)
			end
		end)
	end
	local function unclickListener()
		return UserInputService.InputEnded:Connect(function(input)
			if input.UserInputType == Enum.UserInputType.MouseButton1 then
				isDragging(false)
				isOutsideTrack(false)
			end
		end)
	end
	local function dragHandler()
		local startMouse = UserInputService:GetMouseLocation()
		local startMouseX = startMouse.X
		local lastMouseY = startMouse.Y
		local originalPosition = untrack(thumbPosition)
		return RunService.PostSimulation:Connect(function()
			local mouse = UserInputService:GetMouseLocation()
			if mouse.X < startMouseX - VALID_MOUSE_BUFFER then
				if not untrack(isOutsideTrack) then
					isOutsideTrack(true)
					thumbPosition(originalPosition)
				end
			else
				local mouseY = mouse.Y
				if untrack(isOutsideTrack) then
					isOutsideTrack(false)
					local newThumbY = math.clamp(mouseY - startMouse.Y + originalPosition.Y.Offset, 0, maximumThumbPosition())
					thumbPosition(UDim2.new(0.5, 0, 0, newThumbY))
				else
					local deltaY = mouseY - lastMouseY
					local currentThumbY = untrack(thumbPosition).Y.Offset
					local newThumbY = math.clamp(currentThumbY + deltaY, 0, maximumThumbPosition())
					thumbPosition(UDim2.new(0.5, 0, 0, newThumbY))
				end
				lastMouseY = mouseY
			end
		end)
	end
	effect(function()
		if isThumbHovered() then
			local clickCon = clickListener()
			cleanup(function()
				return clickCon:Disconnect()
			end)
		end
	end)
	effect(function()
		if isDragging() then
			local unclickCon = unclickListener()
			local dragCon = dragHandler()
			cleanup(function()
				dragCon:Disconnect()
				unclickCon:Disconnect()
			end)
		end
	end)
	return thumbPosition
end
-- Maximum the mouse can move outside the thumb and still be considered a drag
VALID_MOUSE_BUFFER = 75
return {
	useThumb = useThumb,
}
