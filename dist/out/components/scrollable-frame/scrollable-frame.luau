-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local derive = _vide.derive
local read = _vide.read
local source = _vide.source
local ContentsContainer = TS.import(script, script.Parent, "contents-container").ContentsContainer
local Scrollbar = TS.import(script, script.Parent, "scroll-bar").Scrollbar
local SCROLL_WIDTH
local function ScrollableFrame(_param)
	local native = _param.native
	local children = _param.children
	local size = _param.size
	local position = _param.position
	local anchorPoint = _param.anchorPoint
	local scrollBarWidth = _param.scrollBarWidth
	local color = _param.color
	-- Frame events
	local _isFrameHovered = source(false)
	-- Contents props
	local _contentContainerSize = derive(function()
		local _condition = scrollBarWidth
		if _condition == nil then
			_condition = SCROLL_WIDTH
		end
		return UDim2.new(1, -read(_condition), 0, 0)
	end)
	local _contentContainerPosition = source(UDim2.new(0, 0, 0, 0))
	local _attributes = {}
	if native then
		for _k, _v in native do
			_attributes[_k] = _v
		end
	end
	_attributes.Size = size
	_attributes.Position = position
	_attributes.AnchorPoint = anchorPoint
	_attributes.ClipsDescendants = true
	_attributes.BackgroundColor3 = color
	_attributes.Name = "scrollable-frame"
	_attributes.MouseEnter = function(_)
		return _isFrameHovered(true)
	end
	_attributes.MouseLeave = function(_)
		return _isFrameHovered(false)
	end
	local _attributes_1 = {}
	local _condition = scrollBarWidth
	if _condition == nil then
		_condition = SCROLL_WIDTH
	end
	_attributes_1.width = _condition
	_attributes_1.frameHovered = _isFrameHovered
	return Vide.jsx("frame", _attributes, Vide.jsx(Scrollbar, _attributes_1), Vide.jsx(ContentsContainer, {
		size = _contentContainerSize,
		position = _contentContainerPosition,
	}, children))
end
-- Default values
SCROLL_WIDTH = 18
return {
	ScrollableFrame = ScrollableFrame,
}
