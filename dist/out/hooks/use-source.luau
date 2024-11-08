-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local source = TS.import(script, TS.getModule(script, "@rbxts", "vide").src).source
--[[
	*
	 * Ensures that a derivable value is a source.\
	 * If the value is already a source, it is returned as is, otherwise a new source is created.
	 *
	 * @param derivable The derivable value or a source.
	 * @returns A source.
	 *
	 
]]
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
