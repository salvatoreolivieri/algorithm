// O(n)
const calculateRecursiveFactorial = (number) => {
  if (number === 1) {
    return 1
  }

  if (number === 2) {
    return 2
  }

  return number * calculateRecursiveFactorial(number - 1)
}

calculateRecursiveFactorial(5)

___

// O(n)
const calculateIterativeFactorial = (number) => {
  let answer = 1

  if (number === 2) {
    answer = 2
  }

  for (let index = 2; index <= number; index++) {
    answer = answer * index
  }

  return answer
}

calculateIterativeFactorial(5)
