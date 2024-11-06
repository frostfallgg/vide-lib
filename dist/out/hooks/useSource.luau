-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local source = TS.import(script, TS.getModule(script, "@rbxts", "vide").src).source
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
