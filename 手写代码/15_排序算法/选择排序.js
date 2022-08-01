function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 时间复杂度 最好最坏都是 O(n^2)

console.log(selectionSort([1, 5, 9, 7, 3, 2, 6, 4, 8]));
