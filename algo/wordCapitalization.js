function words(str) {
	return str.split(' ')
}

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function wordsCapitalization(str) {
	return words(str).map(capitalizeFirstLetter).join(' ')
}
