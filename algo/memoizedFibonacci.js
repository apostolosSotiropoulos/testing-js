function fibonacci (idx, fibos = []) {
  // 1 1 2 3 5 8
  if (idx <= 2) return 1
  fibos[idx] = fibonacci(idx - 1, fibos) + fibonacci(idx - 2, fibos)
  return fibos[idx]
}