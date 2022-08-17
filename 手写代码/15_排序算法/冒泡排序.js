function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// 冒泡排序：时间复杂度 最坏O(n^2) 最好O(n)

console.log(bubbleSort([1, 5, 9, 7, 3, 2, 6, 4, 8]))
