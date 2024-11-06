-- Compiled with roblox-ts v3.0.0
local Fonts = {}
do
	local _container = Fonts
	local robotoSlab = {
		regular = Font.fromId(12187368625, Enum.FontWeight.Regular),
		medium = Font.fromId(12187368625, Enum.FontWeight.Medium),
		bold = Font.fromId(12187368625, Enum.FontWeight.Bold),
	}
	_container.robotoSlab = robotoSlab
	local montserrat = {
		regular = Font.fromId(11702779517, Enum.FontWeight.Regular),
		medium = Font.fromId(11702779517, Enum.FontWeight.Medium),
		bold = Font.fromId(11702779517, Enum.FontWeight.Bold),
	}
	_container.montserrat = montserrat
	local inter = {
		regular = Font.fromId(12187365364, Enum.FontWeight.Regular),
		medium = Font.fromId(12187365364, Enum.FontWeight.Medium),
		bold = Font.fromId(12187365364, Enum.FontWeight.Bold),
	}
	_container.inter = inter
	local poppins = {
		regular = Font.fromId(11702779409, Enum.FontWeight.Regular),
		medium = Font.fromId(11702779409, Enum.FontWeight.Medium),
		bold = Font.fromId(11702779409, Enum.FontWeight.Bold),
	}
	_container.poppins = poppins
	local arial = {
		regular = Font.fromEnum(Enum.Font.Arial),
		bold = Font.fromEnum(Enum.Font.ArialBold),
	}
	_container.arial = arial
	local roboto = {
		regular = Font.fromEnum(Enum.Font.Roboto),
	}
	_container.roboto = roboto
end
return {
	Fonts = Fonts,
}
