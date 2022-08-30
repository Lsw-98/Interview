let obj = {}
let str = "a.b.c"
let value = 5
let arr = str.split(".");
for (let index = arr.length - 1; index >= 0; index--) {
  if (index == arr.length - 1) {
    obj = {
      [arr[index]]: 5
    }
  } else {
    obj = {
      [arr[index]]: obj
    }
  }
}

console.log(obj);