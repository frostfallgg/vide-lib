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
local function useDragMove(isHovered, position)
	local isDragging = source(false)
	local startOffset = source(Vector2.new())
	local function clickHandler(_, state, input)
		if state == Enum.UserInputState.Begin then
			local mousePos = UserInputService:GetMouseLocation()
			local currentPos = untrack(position)
			local framePos = Vector2.new(currentPos.X.Offset, currentPos.Y.Offset)
			startOffset(mousePos - framePos)
			isDragging(true)
		end
		return Enum.ContextActionResult.Sink
	end
	local function unclickHandler(_, state, input)
		if state == Enum.UserInputState.End then
			isDragging(false)
		end
		return Enum.ContextActionResult.Sink
	end
	local function dragHandler()
		return RunService.PostSimulation:Connect(function()
			local mousePos = UserInputService:GetMouseLocation()
			local offset = untrack(startOffset)
			local currentPos = untrack(position)
			local newPosition = UDim2.new(currentPos.X.Scale, mousePos.X - offset.X, currentPos.Y.Scale, mousePos.Y - offset.Y)
			position(newPosition)
		end)
	end
	effect(function()
		if isHovered() and not isDragging() then
			ContextActionService:BindAction("browser_drag", clickHandler, false, Enum.UserInputType.MouseButton1)
			cleanup(function()
				ContextActionService:UnbindAction("browser_drag")
			end)
		end
	end)
	effect(function()
		if isDragging() then
			ContextActionService:BindAction("browser_undrag", unclickHandler, false, Enum.UserInputType.MouseButton1)
			local dragCon = dragHandler()
			cleanup(function()
				dragCon:Disconnect()
				ContextActionService:UnbindAction("browser_undrag")
			end)
		end
	end)
end
return {
	useDragMove = useDragMove,
}
