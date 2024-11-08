-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local _vide = TS.import(script, TS.getModule(script, "@rbxts", "vide").src)
local Vide = _vide
local derive = _vide.derive
local read = _vide.read
local Show = _vide.Show
local useSource = TS.import(script, script.Parent.Parent, "hooks", "use-source").useSource
local UISlices = TS.import(script, script.Parent.Parent, "resources", "images").UISlices
local function ShapeButton(_param)
	local children = _param.children
	local border = _param.border
	local borderColor = _param.borderColor
	local color = _param.color
	local shape = _param.shape
	local onClick = _param.onClick
	local native = _param.native
	local showBorder = useSource(border)
	local image = derive(function()
		return UISlices[read(shape)].imgShape
	end)
	local borderImage = derive(function()
		return UISlices[read(shape)].imgBorder
	end)
	local slice = derive(function()
		return UISlices[read(shape)].slice
	end)
	local _attributes = {}
	if native then
		for _k, _v in native do
			_attributes[_k] = _v
		end
	end
	_attributes.Name = "shape-frame"
	_attributes.Image = image
	_attributes.BackgroundTransparency = 1
	_attributes.ScaleType = "Slice"
	_attributes.SliceCenter = slice
	_attributes.SliceScale = 1
	_attributes.ImageColor3 = color
	_attributes.Activated = onClick
	return Vide.jsx("imagebutton", _attributes, Vide.jsx(Show, {
		when = showBorder,
	}, function()
		local _attributes_1 = {}
		if native then
			for _k, _v in native do
				_attributes_1[_k] = _v
			end
		end
		_attributes_1.Name = "shape-frame-border"
		_attributes_1.Image = borderImage
		_attributes_1.BackgroundTransparency = 1
		_attributes_1.ScaleType = "Slice"
		_attributes_1.SliceCenter = slice
		_attributes_1.SliceScale = 1
		_attributes_1.ImageColor3 = borderColor
		_attributes_1.Active = false
		return Vide.jsx("imagebutton", _attributes_1)
	end), children)
end
return {
	ShapeButton = ShapeButton,
}
