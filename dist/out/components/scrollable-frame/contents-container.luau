-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Vide = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "vide", "src")
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
