function frequencyMap (array) {
  let map = new Map()

  for (const char of array) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

function twoSum (integers, sum) {
  let integersMap = frequencyMap(integers)
  return integers.reduce((result, element) => {
    const suplement = sum - element
    if (integersMap.has(suplement) && integersMap.get(suplement) > 0 &&
      (element != suplement || integersMap.get(suplement) > 1)) {
      integersMap.set(element, 0)
      result.push([element, suplement])
    }
    return result
  }, [])
}

console.log(twoSum([1, 2, 2, 3, 4], 4)) // [[1,3], [2,2]]
