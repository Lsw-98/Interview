
function quicksort(arr, left, right) {
  var len = arr.length
  left = typeof left != 'number' ? 0 : left
  right = typeof right != 'number' ? len - 1 : right

  if (left < right) {
    var partitionINdex = partition(arr, left, right);
    quicksort(arr, left, partitionINdex - 1)
    quicksort(arr, partitionINdex + 1, right)
  }
  return arr

}

function partition(arr, left, right) {
  var pivot = left
  var index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      // 不能让的index=pivot，因为这样会使标记元素被交换走
      swap(arr, i, index)
      // 记录比arr[pivot]小的数有多少个，实际个数需要index-1，因为index初始位置在pivot右边，算下来会比实际的多1位
      // 【包括了arr[pivot]】
      index += 1
    }
  }
  // 因为最开始的index从pivot的右边一个开始计算，所以在算有多少个比arr[pivot]大的时候，需要-1
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}
var a = [1, 5, 9, 7, 3, 2, 6, 4, 8]

console.log(quicksort(a));
