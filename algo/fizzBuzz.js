// specialNumber
// 	isSpecial
// 	representation

// numberToSpecialNumbersMapper
// 	forEach specialNumber
// 	append presentation if it should

// fizzBuzz
// 	takes number
// 	creates specialNumbers array
// 	calls numberToSpecialNumbersMapper with number and specialNumbers array
// 	prints

class FizzNumber {
	constructor(n) {
		this.number = n
	}
	isSpecial() {
		return (this.number % 2 == 0)
	}
	representation() {
		return 'Fizz'
	}
}

class BuzzNumber {
	constructor(n) {
		this.number = n
	}
	isSpecial() {
		return (this.number % 3 == 0)
	}
	representation() {
		return 'Buzz'
	}
}

const numberToSpecialNumbersMapper = (number, specialNumbers) => {
	let numberPresentation = ''
	specialNumbers.forEach( specialNumber => {
		candidateNumber = new specialNumber(number)
		if (candidateNumber.isSpecial()) numberPresentation += ` ${candidateNumber.representation()}`
	})
	// turnary to return numberPresentation ? else number.toString()
	if (numberPresentation == '') {
		return number.toString()
	} else {
		return numberPresentation.trim()
	}
}

const fizzBuzz = n => {
	const specialNumbers = [FizzNumber, BuzzNumber]
	for(let i = 1; i <= n ; i++) {
		console.log(
			numberToSpecialNumbersMapper(i, specialNumbers)
		)
	}
}