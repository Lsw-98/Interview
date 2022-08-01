function addArr(arr) {
  return arr.reduce((pre, cur) => {
    return pre += cur
  })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(addArr(arr));