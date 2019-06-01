function isVowel(char) {
	return (['a', 'o', 'i', 'u', 'e'].indexOf(char) != -1)
}

function vowels(str) {
	return str.split('').reduce( (sum, char) => {	return (isVowel(char) ? (sum + 1) : sum) }, 0 ) || 0
}
