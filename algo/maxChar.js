function charsToFrequency(str) {
	let map = new Map()

	for (const char of str.split('')) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1)
		} else {
			map.set(char, 1)
		}
	}

	return map
}

function maxChar(str) {
	let charToFrequency = charsToFrequency(str)
	let mostFrequent = str[0]

	charToFrequency.forEach( (v, k) => {
		if (v > charToFrequency.get(mostFrequent)) mostFrequent = k
	})

	return mostFrequent
}
