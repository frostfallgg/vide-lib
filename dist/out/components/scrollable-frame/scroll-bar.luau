-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _vide = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "vide", "src")
local Vide = _vide
local derive = _vide.derive
local read = _vide.read
local ShapeButton = TS.import(script, game:GetService("ReplicatedStorage"), "Package", "components", "shape-button").ShapeButton
local THUMB_COLOR
local function Scrollbar(_param)
	local width = _param.width
	local thumbColor = _param.thumbColor
	local frameHovered = _param.frameHovered
	-- Thumb props
	local _thumbSize = derive(function()
		return UDim2.new(0, read(width), 0, 60)
	end)
	local _thumbColor = derive(function()
		return read(thumbColor or THUMB_COLOR)
	end)
	-- Track props
	local _trackSize = derive(function()
		return UDim2.new(0, read(width), 1, 0)
	end)
	return Vide.jsx("frame", {
		Name = "scroll-bar",
		Size = _trackSize,
		AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.fromScale(1, 0),
		BackgroundTransparency = 1,
	}, Vide.jsx(ShapeButton, {
		native = {
			Name = "scroll-track",
			Size = UDim2.new(0.5, 0, 0.985, 0),
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
		},
		shape = "circle_128",
		color = Color3.fromRGB(43, 45, 49),
	}, Vide.jsx(ShapeButton, {
		native = {
			Name = "scroll-thumb",
			Size = UDim2.new(1, 0, 0, 125),
			AnchorPoint = Vector2.new(0.5, 0),
			Position = UDim2.fromScale(0.5, 0),
		},
		shape = "circle_128",
		color = Color3.fromRGB(26, 27, 30),
	})))
end
THUMB_COLOR = Color3.fromHSV(0, 0.04, 0.46)
return {
	Scrollbar = Scrollbar,
}
