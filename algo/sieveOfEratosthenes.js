function primes (n) {
  let primality = Array(n + 1).fill(true)
  primality[0] = primality[1] = false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!primality[i]) continue
    for (let j = i * 2; j <= n; j += i) primality[j] = false
  }

  return primality.reduce(
    (primes, isPrime, num) => { if (isPrime) primes.push(num); return primes },
    []
  )
}

console.log(primes(10)) // [2, 3, 5, 7]
