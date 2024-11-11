-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local cleanup = _vide.cleanup
local derive = _vide.derive
local effect = _vide.effect
local read = _vide.read
local source = _vide.source
local Button = TS.import(script, script.Parent.Parent, "base", "button").Button
local Frame = TS.import(script, script.Parent.Parent, "base", "frame").Frame
local useScrollInput = TS.import(script, script.Parent, "hooks", "use-scroll-input").useScrollInput
local useThumb = TS.import(script, script.Parent, "hooks", "use-thumb").useThumb
local TRACK_HEIGHT_MULTIPLER
local function Scrollbar(_param)
	local barWidth = _param.barWidth
	local thumbHeightMultiplier = _param.thumbHeightMultiplier
	local onScrollCallback = _param.onScrollCallback
	local maxContentScroll = _param.maxContentScroll
	local isFrameHovered = _param.isFrameHovered
	local thumbColor = _param.thumbColor
	local trackColor = _param.trackColor
	-- Outputs
	local trackSizeOut = source(Vector2.new(0, 0))
	-- Actions
	local function trackAction(ref)
		local sizeChanged = ref:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
			return trackSizeOut(ref.AbsoluteSize)
		end)
		cleanup(function()
			return sizeChanged:Disconnect()
		end)
	end
	-- Events
	local isThumbHovered = source(false)
	-- Props
	local barSize = derive(function()
		return UDim2.new(0, read(barWidth), 1, 0)
	end)
	-- Computed props
	local thumbSizeDerived = derive(function()
		local trackSizeY = trackSizeOut().Y
		local relativeToContent = thumbHeightMultiplier() * trackSizeY
		if relativeToContent >= trackSizeY then
			return UDim2.new(0, read(barWidth), 0, 0)
		end
		return UDim2.new(1, 0, 0, relativeToContent)
	end)
	local maxThumbPosition = derive(function()
		return trackSizeOut().Y - thumbSizeDerived().Height.Offset
	end)
	-- Interactions
	local thumbPosition = useThumb(maxThumbPosition, isThumbHovered)
	useScrollInput(maxThumbPosition, isFrameHovered, thumbPosition)
	effect(function()
		return onScrollCallback(thumbPosition().Height.Offset, maxContentScroll(), trackSizeOut().Y)
	end)
	return Vide.jsx("frame", {
		Name = "scroll-bar",
		Size = barSize,
		AnchorPoint = Vector2.new(1, 0),
		Position = UDim2.fromScale(1, 0),
		BackgroundTransparency = 1,
	}, Vide.jsx(Frame, {
		native = {
			Name = "scroll-track",
			Size = UDim2.new(0.5, 0, TRACK_HEIGHT_MULTIPLER, 0),
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			BackgroundColor3 = trackColor,
			action = trackAction,
		},
		cornerRadius = 180,
	}, Vide.jsx(Button, {
		native = {
			Name = "scroll-thumb",
			Size = thumbSizeDerived,
			AnchorPoint = Vector2.new(0.5, 0),
			Position = thumbPosition,
			BackgroundColor3 = thumbColor,
			MouseEnter = function()
				return isThumbHovered(true)
			end,
			MouseLeave = function()
				return isThumbHovered(false)
			end,
		},
		cornerRadius = 180,
	})))
end
TRACK_HEIGHT_MULTIPLER = 0.985
local THUMB_COLOR = Color3.fromHSV(0, 0.04, 0.46)
return {
	Scrollbar = Scrollbar,
}
