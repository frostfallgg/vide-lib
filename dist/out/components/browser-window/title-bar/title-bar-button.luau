-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local effect = _vide.effect
local source = _vide.source
local untrack = _vide.untrack
local Button = TS.import(script, script.Parent.Parent.Parent, "base", "button").Button
local ImageLabel = TS.import(script, script.Parent.Parent.Parent, "base", "image-label").ImageLabel
local useTween = TS.import(script, script.Parent.Parent.Parent.Parent, "hooks", "animation", "use-tween").useTween
local function TitleBarButton(_param)
	local Name = _param.Name
	local Callback = _param.Callback
	local Icon = _param.Icon
	local IconColor = _param.IconColor
	local OnHoverBackgroundColor = _param.OnHoverBackgroundColor
	local LayoutOrder = _param.LayoutOrder
	local OnHoverTransparency = _param.OnHoverTransparency
	local isHovered = source(false)
	local BackgroundTransparency = source(1)
	local IconTransparency = source(0.5)
	local cfg = {
		time = 0.1,
	}
	effect(function()
		if isHovered() then
			local backgroundTween = useTween(untrack(BackgroundTransparency), OnHoverTransparency, BackgroundTransparency, cfg)
			local iconTween = useTween(untrack(IconTransparency), 0, IconTransparency, cfg)
			backgroundTween:start()
			iconTween:start()
		else
			local backgroundTween = useTween(untrack(BackgroundTransparency), 1, BackgroundTransparency, cfg)
			local iconTween = useTween(untrack(IconTransparency), 0.5, IconTransparency, cfg)
			backgroundTween:start()
			iconTween:start()
		end
	end)
	return Vide.jsx(Button, {
		native = {
			Name = Name,
			LayoutOrder = LayoutOrder,
			BackgroundTransparency = BackgroundTransparency,
			MouseEnter = function()
				return isHovered(true)
			end,
			MouseLeave = function()
				return isHovered(false)
			end,
			Size = UDim2.fromScale(1, 1),
			BackgroundColor3 = OnHoverBackgroundColor,
			Activated = Callback,
		},
		aspectRatio = 1.5,
		aspectRatioConstraint = "Height",
	}, Vide.jsx(ImageLabel, {
		native = {
			Image = Icon,
			BackgroundColor3 = IconColor,
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(0.5, 0.5),
			BackgroundTransparency = 1,
			ImageTransparency = IconTransparency,
		},
		aspectRatio = 1,
		aspectRatioConstraint = "Height",
	}))
end
return {
	TitleBarButton = TitleBarButton,
}
