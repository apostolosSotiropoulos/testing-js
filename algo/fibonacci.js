// fibonacci array index 1,2,3,4,5,6
// fibonacci array value 1,1,2,3,5,8

function fibonacci (idx) {
  // TODO idx should be greater than 0
  let currentFibo = 1
  let prevFibo = 0
  let tmp = 0
  for (let i = 1; i < idx; i++) {
    tmp = currentFibo
    currentFibo = currentFibo + prevFibo
    prevFibo = tmp
  }
  return currentFibo
}

[1, 2, 3, 6, 10].forEach(idx => console.log(fibonacci(idx)))
