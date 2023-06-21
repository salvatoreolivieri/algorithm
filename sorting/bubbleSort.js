const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap items:
        let temporaryVariable = array[j] // using a temporary variable is an important point to focus on
        array[j] = array[j + 1]
        array[j + 1] = temporaryVariable
      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)
