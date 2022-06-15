function flatten(arr, deep = 1) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && deep > 1) {
      return acc.concat(flatten(val, deep--))
    } else {
      return acc.concat(val)
    }
  }, [])
}

function flattenDeep(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenDeep(val))
    } else {
      return acc.concat(val)
    }
  }, [])
}