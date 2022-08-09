function disordered(arr) {
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    const r = Math.floor(Math.random() * (size - 1 - i))
    const mid = arr[r]
    arr[r] = arr[size - 1 - i]
    arr[size - 1 - i] = mid
  }
  return arr
}

console.log(disordered([1, 2, 3, 4, 5, 6, 7, 8, 9]));