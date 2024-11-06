-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local source = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "vide", "src").source
local function useSource(derivable)
	local _derivable = derivable
	if type(_derivable) == "function" then
		return derivable
	end
	return source(derivable)
end
return {
	useSource = useSource,
}
