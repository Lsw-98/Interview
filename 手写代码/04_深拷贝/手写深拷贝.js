let obj1 = {
  f: function () {
    console.log("fff");
  },
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
  e: [1, 2, 3]
}

let obj = [1, 2, 3, [4, 5, 6]]

function deepcopy(obj) {
  let res = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      // for...in...会遍历原型链上的属性和对象
      // 要使用hasOwnProperty()判断当前遍历的key是否属于obj自身
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          res[key] = deepcopy(obj[key])
        } else {
          res[key] = obj[key]
        }
      }
    }
  }
  return res
}

obj2 = deepcopy(obj1)

// obj2.a = 111
// obj2.c.d = 444

console.log(obj1);
console.log(obj2);