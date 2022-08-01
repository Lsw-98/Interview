function quickSort(arr) {
  if (arr.length <= 1) return arr

  const left = []
  const right = []
  const pIndex = Math.floor(arr.length / 2)
  const p = arr.splice(pIndex, 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < p) left.push(arr[i])
    else right.push(arr[i])
  }

  return quickSort(left).concat([p], quickSort(right))
}


// 时间复杂度 最坏是 O(n^2)  最好是O(nlongn)

console.log(quickSort([1, 5, 9, 7, 3, 2, 6, 4, 8]));
