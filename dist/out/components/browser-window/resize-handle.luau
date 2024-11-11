-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local derive = _vide.derive
local source = _vide.source
local Frame = TS.import(script, script.Parent.Parent, "base", "frame").Frame
local ImageLabel = TS.import(script, script.Parent.Parent, "base", "image-label").ImageLabel
local useDragResize = TS.import(script, script.Parent, "hooks", "use-drag-resize").useDragResize
local function ResizeHandle(_param)
	local color = _param.color
	local parentSize = _param.parentSize
	local parentPosition = _param.parentPosition
	local parentAnchor = _param.parentAnchor
	local isHovered = source(false)
	local isDragging = useDragResize(isHovered, parentSize, parentPosition, parentAnchor)
	local transparency = derive(function()
		return if isHovered() or isDragging() then 0.75 else 0.9
	end)
	return Vide.jsx(Frame, {
		native = {
			Position = UDim2.fromScale(1, 1),
			AnchorPoint = Vector2.new(1, 1),
			Size = UDim2.fromScale(0.1, 0.1),
			BackgroundTransparency = 1,
			MouseEnter = function()
				return isHovered(true)
			end,
			MouseLeave = function()
				return isHovered(false)
			end,
		},
		aspectRatio = 1,
		maxSize = Vector2.new(34, 34),
		minSize = Vector2.new(16, 16),
	}, Vide.jsx(ImageLabel, {
		native = {
			Image = "rbxassetid://117985231770365",
			Size = UDim2.fromScale(0.85, 0.85),
			BackgroundTransparency = 1,
			ImageColor3 = color,
			ImageTransparency = transparency,
		},
	}))
end
return {
	ResizeHandle = ResizeHandle,
}
