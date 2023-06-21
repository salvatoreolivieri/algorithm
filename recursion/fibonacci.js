// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...]
// The pattern of this sequence is that each value is the sum of the previous values, that means that for N=5 -> 2+3

// O(n)
const fibonacciIterative = (n) => {
  let fibonacciSequence = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1])
  }

  return fibonacciSequence[n]
}

fibonacciIterative(8)

____

// O (2^N)
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

fibonacciRecursive(8)
