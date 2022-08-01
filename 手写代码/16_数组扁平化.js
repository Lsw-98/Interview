function flatten(arr, deep = 1) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur) && deep > 1) {
      return pre.concat(flatten(cur, deep--))
    } else {
      return pre.concat(cur)
    }
  }, [])
}

function flattenDeep(arr) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flattenDeep(cur))
    } else {
      return pre.concat(cur)
    }
  }, [])
}

console.log(flatten([[[1, 2], 3], 4, 5, [6, 7]]));
