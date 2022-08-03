const arr = [{
  name: 'apple',
  label: '苹果1'
}, {
  name: 'apple',
  label: '苹果2'
}]

function toObject() {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i].name)) {
      obj[arr[i].name].push(arr[i].label)
    } else {
      obj[arr[i].name] = [arr[i].label]
    }
  }
  return obj
}

// console.log
// {
//   apple: ['苹果1', '苹果2']
// }