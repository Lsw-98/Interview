// reduce
function flatten(arr, deep = 1) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur) && deep > 1) {
      return pre.concat(flatten(cur, deep--))
    } else {
      return pre.concat(cur)
    }
  }, [])
}

// console.log(flatten([1, 2, [3, 4, 5, [6, [7, 8, 9]]]]));

// 扩展运算符
function demo(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(demo([1, 2, [3, 4, 5, [6, [7, 8, 9]]]]));