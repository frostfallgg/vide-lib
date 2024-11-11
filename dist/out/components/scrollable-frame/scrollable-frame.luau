-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local cleanup = _vide.cleanup
local derive = _vide.derive
local read = _vide.read
local source = _vide.source
local Themes = TS.import(script, script.Parent.Parent.Parent, "resources", "themes").Themes
local ContentsContainer = TS.import(script, script.Parent, "contents-container").ContentsContainer
local Scrollbar = TS.import(script, script.Parent, "scroll-bar").Scrollbar
local SCROLL_WIDTH
local function ScrollableFrame(_param)
	local children = _param.children
	local size = _param.size
	local position = _param.position
	local anchorPoint = _param.anchorPoint
	local scrollBarWidth = _param.scrollBarWidth
	local backgroundColor = _param.backgroundColor
	if backgroundColor == nil then
		backgroundColor = Themes.Discord.Dark[2]
	end
	local scrollThumbColor = _param.scrollThumbColor
	if scrollThumbColor == nil then
		scrollThumbColor = Themes.Discord.Dark[6]
	end
	local scrollTrackColor = _param.scrollTrackColor
	if scrollTrackColor == nil then
		scrollTrackColor = Themes.Discord.Dark[3]
	end
	-- Ouputs
	local visibleContentSize = source(Vector2.new(0, 0))
	local totalContentSize = source(Vector2.new(0, 0))
	-- Events
	local isFrameHovered = source(false)
	-- Props
	local contentContainerPosition = source(UDim2.new(0, 0, 0, 0))
	-- Computed props
	local contentContainerSize = derive(function()
		local _condition = scrollBarWidth
		if _condition == nil then
			_condition = SCROLL_WIDTH
		end
		return UDim2.new(1, -read(_condition), 0, 0)
	end)
	local thumbHeight = derive(function()
		local visibleSize = visibleContentSize()
		local totalSize = totalContentSize()
		return visibleSize.Y / totalSize.Y
	end)
	local maxContentScroll = derive(function()
		return math.max(0, totalContentSize().Y - visibleContentSize().Y)
	end)
	-- Actions
	local function frameAction(ref)
		local connection = ref:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
			visibleContentSize(ref.AbsoluteSize)
		end)
		cleanup(function()
			return connection:Disconnect()
		end)
	end
	-- Callbacks
	local function scrollCallback(pos, max, trackHeight)
		local scrollPercentage = pos / (trackHeight - trackHeight * (trackHeight / (trackHeight + max)))
		local scrollPosition = scrollPercentage * max
		contentContainerPosition(UDim2.new(0, 0, 0, -scrollPosition))
	end
	local _attributes = {}
	local _condition = scrollBarWidth
	if _condition == nil then
		_condition = SCROLL_WIDTH
	end
	_attributes.barWidth = _condition
	_attributes.isFrameHovered = isFrameHovered
	_attributes.thumbHeightMultiplier = thumbHeight
	_attributes.onScrollCallback = scrollCallback
	_attributes.maxContentScroll = maxContentScroll
	_attributes.thumbColor = scrollThumbColor
	_attributes.trackColor = scrollTrackColor
	return Vide.jsx("frame", {
		Size = size,
		Position = position,
		AnchorPoint = anchorPoint,
		ClipsDescendants = true,
		BackgroundColor3 = backgroundColor,
		Name = "scrollable-frame",
		MouseEnter = function()
			return isFrameHovered(true)
		end,
		MouseLeave = function()
			return isFrameHovered(false)
		end,
		action = frameAction,
	}, Vide.jsx(Scrollbar, _attributes), Vide.jsx(ContentsContainer, {
		size = contentContainerSize,
		position = contentContainerPosition,
		contentSizeOut = totalContentSize,
	}, children))
end
-- Default values
SCROLL_WIDTH = 18
return {
	ScrollableFrame = ScrollableFrame,
}
