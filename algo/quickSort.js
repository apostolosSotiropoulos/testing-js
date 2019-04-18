function standardSort(numbersArray) {
  const difference = (n1, n2) => n1 - n2
  const array = [...numbersArray] // create a copy of the input array
  return array.sort(difference)
}

function elementPositionAfterStandartSorting(element, numbersArray) {
  return standardSort(numbersArray).indexOf(element)
}

function elementPositionAfterCustomSorting(element, array) {
  function reducer(final, current) {
    if (current < element) {
      final += 1
    }
    return final
  }
  return array.reduce(reducer, 0)
}

// elementPositionAfterStandartSorting(8, numbers) == elementPositionAfterCustomSorting(8, numbers)

function quickSort(numbersArray) {
  if (numbersArray.length <= 1) return numbersArray

  let numbers = [...numbersArray]
  let pivot = numbers.pop()
  let smallerNumbers = numbers.filter(num => num <= pivot)
  let greaterNumbers = numbers.filter(num => num > pivot)
  let smallerSortedNumbers = quickSort(smallerNumbers)
  let greatedSortedNumbers = quickSort(greaterNumbers)
  return smallerSortedNumbers.concat([pivot])
    .concat(greatedSortedNumbers)
}

let numbers = [6, 2, 8, 2, 72, 623, 1, 3, 8, 2]
console.log('numbers before sorting:')
console.log(numbers)
console.log('sorted numbers:')
console.log(quickSort(numbers))
console.log('numbers after sorting:')
console.log(numbers)