const arrayToFrequencyMap = (ar) => {
  let frequencyMap = new Map([])
  ar.forEach((el) => {
    if (frequencyMap.has(el)) {
      frequencyMap.set(el, frequencyMap.get(el) + 1)
    } else {
      frequencyMap.set(el, 1)
    }
  })
  return frequencyMap
}

class Stats {
  constructor (data) {
    if (!Array.isArray(data) || !data.every((el) => Number.isInteger(el))) throw 'please provide an array of integers'
    this.data = data
  }
  mean () {
    return Stats.mean(this.data)
  }
  median () {
    const array = this.data.sort()
    const length = array.length
    const lengthMod = length % 2
    const lengthDiv = (length - lengthMod) / 2
    return lengthMod === 0 ? Stats.mean(array.slice(lengthDiv - 1, lengthDiv + 1)) : array[lengthDiv]
  }
  mode () {
    const numberToFrequency = arrayToFrequencyMap(this.data)
    let max = 0
    let maxKeys = []
    let equalElements = 0
    numberToFrequency.forEach((val, key) => {
      if (val > max) {
        max = val
        maxKeys = [key]
        equalElements = val
      } else if (val == max) {
        maxKeys.push(key)
        equalElements += val
      }
    })
    return equalElements === this.data.length ? [] : maxKeys
  }
  static round (n) {
    if (typeof n !== 'number') throw `round called with arg ${n}: not a number`
    return n.toFixed(2)
  }
  static mean (numbersArray) {
    return numbersArray.reduce((acc, el) => acc + el, 0) / numbersArray.length
  }
}

const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5])
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4])
console.log(Stats.round(stat1.mean())) //, 3.43);
console.log(Stats.round(stat2.mean())) //, 2.5);
console.log(stat1.median()) // 4);
console.log(stat2.median()) // 2.5);
console.log(stat1.mode()) // [4, 5]);
console.log(stat2.mode()) // []);
