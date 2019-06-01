let lowerCaseletters = 'abcdefghijklmnopqrstuvwxyz'.split('')
let upperCaseletters = lowerCaseletters.map(l => l.toUpperCase())

function alphabetPicker (letter) {
  if (lowerCaseletters.includes(letter)) return lowerCaseletters
  if (upperCaseletters.includes(letter)) return upperCaseletters
  return false
}

function letterCode (letter, offset) {
  let alphabet = alphabetPicker(letter)
  if (!alphabet) return letter

  let codeOffset = alphabet.indexOf(letter) + offset % alphabet.length

  return alphabet[codeOffset]
}

function caesarCipher (phrase, offset) {
  let letterToCodeCache = new Map()
  let encodedLetters    = phrase.split('').map(function (letter) {
    if (!letterToCodeCache.has(letter)) letterToCodeCache.set(letter, letterCode(letter, offset))
    return letterToCodeCache.get(letter)
  })
  return encodedLetters.join('')
}

console.log(caesarCipher('I am a string', 1))
console.log(caesarCipher('J bn b tusjoh', -1))
