let words = (str) => str.split(' ')

// slow solution
// const ransomNote = (phrase, magazine) => {
//  magazine = words(magazine)
//  for (const word of words(phrase)) {
//      const index = magazine.indexOf(word)
//      if (index == -1) return false
//      magazine.splice(index, 1)
//  }
//  return true
// }

// fast solution
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

const ransomNote = (phrase, magazine) => {
  let magazineWordToCount = arrayToFrequencyMap(words(magazine))
  let count = 0
  for (const word of words(phrase)) {
    if (!magazineWordToCount.has(word)) return false
    count = magazineWordToCount.get(word)
    if (count == 0) return false
    magazineWordToCount.set(word, count - 1)
  }
  return true
}

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum";
ransomNote("sit ad est sint", magazine) // true
ransomNote("sit ad est love", magazine) // false
ransomNote("sit ad est sint in in", magazine) // true
