const unique = () => {
  let obj = {}
  return arr.filter((item => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  }))
}

const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr));

