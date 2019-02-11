export default function(color) {
	const palette = {
		"brand-red": "#ff483c",
		"brand-purple": "#7366fb",
		"brand-green": "#8CB369",
		"brand-yellow": "#F4E285",
		"brand-orange": "#fd8451",
		"brand-pink": "#fed1cf",

		"brand-white": "#F8FBF7",
		"brand-grey-lightest": "#F4F4F0",
		"brand-grey-light": "#DEDEDC",
		"brand-grey-medium": "#81717A",
		"brand-grey-dark": "#595358",
		"brand-grey-darkest": "#333031",
		"brand-black": "#232021",
	}
	return palette[color]
}