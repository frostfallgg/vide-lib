-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local derive = _vide.derive
local read = _vide.read
local source = _vide.source
local Themes = TS.import(script, script.Parent.Parent.Parent.Parent, "resources", "themes").Themes
local TitleBarButton = TS.import(script, script.Parent, "title-bar-button").TitleBarButton
local function TitleBar(_param)
	local CloseBtnHoverColor = _param.CloseBtnHoverColor
	local Height = _param.Height
	local IconColor = _param.IconColor
	local TitleBarColor = _param.TitleBarColor
	local CloseCallback = _param.CloseCallback
	local RestoreCallback = _param.RestoreCallback
	local MinimizeCallback = _param.MinimizeCallback
	local IsHovered = _param.IsHovered
	local isWindowMaximized = source(false)
	local windowRestoreImage = derive(function()
		return if isWindowMaximized() then "rbxassetid://123132304035929" else "rbxassetid://90008385056327"
	end)
	return Vide.jsx("frame", {
		Name = "title-bar",
		Size = UDim2.new(1, 0, 0, read(Height)),
		BackgroundColor3 = TitleBarColor,
		MouseEnter = function()
			return IsHovered(true)
		end,
		MouseLeave = function()
			return IsHovered(false)
		end,
	}, Vide.jsx("uilistlayout", {
		FillDirection = "Horizontal",
		SortOrder = "LayoutOrder",
		HorizontalAlignment = "Right",
	}), Vide.jsx(TitleBarButton, {
		Name = "close-btn",
		LayoutOrder = 3,
		Callback = CloseCallback,
		Icon = "rbxassetid://107348252014204",
		IconColor = IconColor,
		OnHoverBackgroundColor = CloseBtnHoverColor,
		OnHoverTransparency = 0.1,
	}), Vide.jsx(TitleBarButton, {
		Name = "toggle-btn",
		LayoutOrder = 2,
		Callback = RestoreCallback,
		Icon = windowRestoreImage,
		IconColor = IconColor,
		OnHoverBackgroundColor = Themes.Discord.White[2],
		OnHoverTransparency = 0.9,
	}), Vide.jsx(TitleBarButton, {
		Name = "minimise-btn",
		LayoutOrder = 1,
		Callback = MinimizeCallback,
		Icon = "rbxassetid://110217920726785",
		IconColor = IconColor,
		OnHoverBackgroundColor = Themes.Discord.White[2],
		OnHoverTransparency = 0.9,
	}))
end
return {
	TitleBar = TitleBar,
}
