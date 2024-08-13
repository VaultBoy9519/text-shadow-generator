$(document).ready(function () {
	function generateRgba(color, opacity) {
		const red16 = color.slice(1, 3)
		const green16 = color.slice(3, 5)
		const blue16 = color.slice(5, 7)

		const red10 = parseInt(red16, 16)
		const green10 = parseInt(green16, 16)
		const blue10 = parseInt(blue16, 16)

		return `rgba(${red10}, ${green10}, ${blue10}, ${opacity})`
	}

	function updateCssShadow({ fontSize, offsetX, offsetY, blur, opacity, color, rgba }) {
		const cssStyles = `${offsetX}px ${offsetY}px ${blur}px ${rgba}`
		$('h1').css('text-shadow', cssStyles)
		$('#resultHex').val(`background-color: ${color};\nopacity: ${opacity};\nfont-size: ${fontSize}px;`)
		$('#resultRgba').val(`text-shadow: ${cssStyles};\nfont-size: ${fontSize}px;`)
	}

	function handleInputChange() {
		const fontSize = $('#font_size').val()
		const offsetX = $('#offset_x').val()
		const offsetY = $('#offset_y').val()
		const blur = $('#blur').val()
		const opacity = $('#opacity').val()
		const color = $('#color_picker').val()
		const rgba = generateRgba(color, opacity)

		$('h1').css('font-size', `${fontSize}px`)
		updateCssShadow({ fontSize, offsetX, offsetY, blur, opacity, color, rgba })
	}

	$(document).on('input change', 'input', handleInputChange)

	handleInputChange()
})
