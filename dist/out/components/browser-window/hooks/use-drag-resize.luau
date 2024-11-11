-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _services = TS.import(script, TS.getModule(script, "@rbxts", "services"))
local ContextActionService = _services.ContextActionService
local RunService = _services.RunService
local UserInputService = _services.UserInputService
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local cleanup = _vide.cleanup
local effect = _vide.effect
local source = _vide.source
local untrack = _vide.untrack
local getCompensateAnchorPosition = TS.import(script, script.Parent.Parent.Parent.Parent, "utility", "scale-util").getCompensateAnchorPosition
local ContextCommands = {
	BrowserResize = "browser_resize",
	BrowserStopResize = "browser_stop_resize",
}
local function useDragResize(isHovered, size, position, anchor, minSize)
	if minSize == nil then
		minSize = Vector2.new(200, 340)
	end
	local isDragging = source(false)
	local startOffset
	local originalAnchor
	local originalPosition
	local originalSize
	local function clickHandler(_, state, input)
		if state == Enum.UserInputState.Begin then
			local mousePos = UserInputService:GetMouseLocation()
			originalSize = untrack(size)
			originalPosition = untrack(position)
			originalAnchor = untrack(anchor)
			startOffset = Vector2.new(originalSize.X.Offset - mousePos.X, originalSize.Y.Offset - mousePos.Y)
			local newAnchor = Vector2.new(0, 0)
			local adjustedPosition = getCompensateAnchorPosition(originalPosition, originalSize, originalAnchor, newAnchor)
			position(adjustedPosition)
			anchor(newAnchor)
			isDragging(true)
		end
		return Enum.ContextActionResult.Sink
	end
	local function unclickHandler(_, state, input)
		if state == Enum.UserInputState.End then
			local adjustedPosition = getCompensateAnchorPosition(untrack(position), untrack(size), Vector2.new(0, 0), originalAnchor)
			anchor(originalAnchor)
			position(adjustedPosition)
			isDragging(false)
		end
		return Enum.ContextActionResult.Sink
	end
	local function dragHandler()
		local lastMousePos = UserInputService:GetMouseLocation()
		return RunService.PostSimulation:Connect(function()
			local mousePos = UserInputService:GetMouseLocation()
			if mousePos.X ~= lastMousePos.X or mousePos.Y ~= lastMousePos.Y then
				local currentSize = untrack(size)
				local newSize = UDim2.new(currentSize.X.Scale, mousePos.X + startOffset.X, currentSize.Y.Scale, mousePos.Y + startOffset.Y)
				size(newSize)
				lastMousePos = mousePos
			end
		end)
	end
	effect(function()
		if isHovered() and not isDragging() then
			ContextActionService:BindAction(ContextCommands.BrowserResize, clickHandler, false, Enum.UserInputType.MouseButton1)
			cleanup(function()
				ContextActionService:UnbindAction(ContextCommands.BrowserResize)
			end)
		end
	end)
	effect(function()
		if isDragging() then
			ContextActionService:BindAction(ContextCommands.BrowserStopResize, unclickHandler, false, Enum.UserInputType.MouseButton1)
			local resizeCon = dragHandler()
			cleanup(function()
				resizeCon:Disconnect()
				ContextActionService:UnbindAction(ContextCommands.BrowserStopResize)
			end)
		end
	end)
	return isDragging
end
return {
	useDragResize = useDragResize,
}
