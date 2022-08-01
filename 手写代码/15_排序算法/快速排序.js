function quickSort(arr) {
  if (arr.length <= 1) return arr
  const left = []
  const right = []
  const midIndex = Math.floor(arr.length / 2)
  const mid = arr.splice(midIndex, 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) left.push(arr[i])
    else right.push(arr[i])
  }

  return quickSort(left).concat([mid], quickSort(right))
}


// 时间复杂度 最坏是 O(n^2)  最好是O(nlongn)

console.log(quickSort([1, 5, 9, 7, 3, 2, 6, 4, 8]));
