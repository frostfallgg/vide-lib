-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local cleanup = _vide.cleanup
local function ContentsContainer(_param)
	local children = _param.children
	local position = _param.position
	local size = _param.size
	local contentSizeSource = _param.contentSizeOut
	local function containerAction(ref)
		local connection = ref:GetPropertyChangedSignal("AbsoluteSize"):Connect(function()
			return contentSizeSource(ref.AbsoluteSize)
		end)
		cleanup(function()
			return connection:Disconnect()
		end)
	end
	return Vide.jsx("frame", {
		Size = size,
		Position = position,
		AutomaticSize = "Y",
		Name = "contents-container",
		action = containerAction,
		BackgroundTransparency = 1,
	}, children)
end
return {
	ContentsContainer = ContentsContainer,
}
