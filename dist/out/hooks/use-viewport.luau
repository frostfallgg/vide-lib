-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Workspace = TS.import(script, TS.getModule(script, "@rbxts", "services")).Workspace
local source = TS.import(script, TS.getModule(script, "@rbxts", "vide").src).source
local viewportSize
local function useViewport()
	local camera = Workspace.CurrentCamera
	if not camera then
		warn("No camera found")
		return nil
	end
	camera:GetPropertyChangedSignal("ViewportSize"):Connect(function()
		viewportSize(camera.ViewportSize)
	end)
	viewportSize(camera.ViewportSize)
end
local function viewport()
	return viewportSize()
end
viewportSize = source(Vector2.new(0, 0))
return {
	useViewport = useViewport,
	viewport = viewport,
}
