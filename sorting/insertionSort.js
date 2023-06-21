const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move the number to the first position
      array.unshift(array.splice(i, 1)[0])
    } else {
      // find where number should go
      for (let j = 0; j < array.length; j++) {
        if (array[i] >= array[j - 1] && array[i] < array[j]) {
          //move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
}

insertionSort(numbers)
console.log(numbers)
