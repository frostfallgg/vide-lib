-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local Show = _vide.Show
local source = _vide.source
local px = TS.import(script, script.Parent.Parent.Parent, "hooks", "use-px").px
local useSource = TS.import(script, script.Parent.Parent.Parent, "hooks", "use-source").useSource
local Themes = TS.import(script, script.Parent.Parent.Parent, "resources", "themes").Themes
local Transition = TS.import(script, script.Parent.Parent, "transition").Transition
local useDragMove = TS.import(script, script.Parent, "hooks", "use-drag-move").useDragMove
local ResizeHandle = TS.import(script, script.Parent, "resize-handle").ResizeHandle
local TitleBar = TS.import(script, script.Parent, "title-bar", "title-bar").TitleBar
local function BrowserWindow(_param)
	local size = _param.size
	if size == nil then
		size = UDim2.new(0, 520, 0, 635)
	end
	local position = _param.position
	if position == nil then
		position = UDim2.new(0.5, 0, 0.5, 0)
	end
	local anchorPoint = _param.anchorPoint
	if anchorPoint == nil then
		anchorPoint = Vector2.new(0.5, 0.5)
	end
	local backgroundColor = _param.backgroundColor
	if backgroundColor == nil then
		backgroundColor = Themes.Discord.Dark[2]
	end
	local titleBarColor = _param.titleBarColor
	if titleBarColor == nil then
		titleBarColor = Themes.Discord.Dark[4]
	end
	local closeBtnHoverColor = _param.closeBtnHoverColor
	if closeBtnHoverColor == nil then
		closeBtnHoverColor = Themes.Discord.Destructive
	end
	local iconColor = _param.iconColor
	if iconColor == nil then
		iconColor = Themes.Discord.White[1]
	end
	local isOpen = _param.isOpen
	local children = _param.children
	local frameRef = source()
	local isTitleBarHovered = source(false)
	local titleBarHeight = source(px(32))
	local browserPosition = useSource(position)
	local browserSize = useSource(size)
	local browserAnchorPoint = useSource(anchorPoint)
	useDragMove(isTitleBarHovered, browserPosition)
	local function closeBrowser()
		isOpen(false)
	end
	local function restoreBrowser()
	end
	local function minimizeBrowser()
	end
	local isTransitioning = source(false)
	return Vide.jsx(Show, {
		when = isOpen,
	}, function()
		return Vide.jsx(Transition, nil, Vide.jsx("frame", {
			Name = "browser-window",
			Size = browserSize,
			Position = browserPosition,
			AnchorPoint = browserAnchorPoint,
			BackgroundTransparency = 1,
			action = function(ref)
				return frameRef(ref)
			end,
		}, Vide.jsx(TitleBar, {
			Height = titleBarHeight,
			TitleBarColor = titleBarColor,
			IconColor = iconColor,
			CloseBtnHoverColor = closeBtnHoverColor,
			CloseCallback = closeBrowser,
			RestoreCallback = restoreBrowser,
			MinimizeCallback = minimizeBrowser,
			IsHovered = isTitleBarHovered,
		}), Vide.jsx("frame", {
			Name = "contents-container",
			Size = UDim2.new(1, 0, 1, -titleBarHeight()),
			Position = UDim2.new(0, 0, 0, titleBarHeight()),
			BackgroundColor3 = backgroundColor,
		}, children), Vide.jsx(ResizeHandle, {
			color = Themes.Discord.White[1],
			parentPosition = browserPosition,
			parentSize = browserSize,
			parentAnchor = browserAnchorPoint,
		})))
	end)
end
return {
	BrowserWindow = BrowserWindow,
}
