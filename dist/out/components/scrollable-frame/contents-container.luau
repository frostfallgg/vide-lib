-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local function ContentsContainer(_param)
	local children = _param.children
	local position = _param.position
	local size = _param.size
	local action = function(ref)
		ref:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
			print(ref.AbsoluteSize)
		end)
	end
	return Vide.jsx("frame", {
		Size = size,
		Position = position,
		AutomaticSize = "Y",
		Name = "contents-container",
		action = action,
		BackgroundTransparency = 1,
	}, children)
end
return {
	ContentsContainer = ContentsContainer,
}
