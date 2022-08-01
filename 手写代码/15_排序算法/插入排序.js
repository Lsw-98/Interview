function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i - 1
    const current = arr[i]
    while (index >= 0 && arr[index] > current) {
      arr[index + 1] = arr[index]
      index -= 1
    }
    arr[index + 1] = current
  }
  return arr
}


// 时间复杂度 最坏情况O(n^2) 最好情况O(n)
console.log(insertionSort([1, 5, 9, 7, 3, 2, 6, 4, 8]));