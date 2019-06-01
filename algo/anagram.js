function charsToFrequency (str) {
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

function areMapsEqual (map1, map2) {
  if (map1.size != map2.size) return false

  for (var [k, v] of map1 ) {
    if (v != map2.get(k)) return false
  }

  return true
}

function isAnagram (str1, str2) {
  return areMapsEqual(charsToFrequency(str1), charsToFrequency(str2))
}