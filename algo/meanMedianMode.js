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
  mean (array = this.data) {
    const length = array.length
    if (length === 0) return 0
    return array.reduce((acc, el) => acc + el, 0) / length
  }
  median (array = this.data) {
    const length = array.length
    const lengthMod = length % 2
    const lengthDiv = (array.length - lengthMod) / 2
    return lengthMod == 0 ? this.mean(array.slice(lengthDiv - 1, lengthDiv + 1)) : array[lengthDiv]
  }
  mode (array = this.data) {
    const numberToFrequency = arrayToFrequencyMap(array)
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
    return equalElements === array.length ? [] : maxKeys
  }
  static round (a) {
    if (typeof a !== 'number') throw 'to round please provide a valid number'
    return a.toFixed(2)
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
