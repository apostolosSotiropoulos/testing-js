function words(str) {
	return str.split(' ')
}

function reverse(str) {
	return str.split('').reverse().join('')
}

function wordsReversal(str) {
	return words(str).map(reverse).join(' ')
}
