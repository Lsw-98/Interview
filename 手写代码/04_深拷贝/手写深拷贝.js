let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

function deepcopy(obj) {
  let res = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (let key in obj) {
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

obj1.a = 111
obj1.c.d = 444

console.log(obj1);
console.log(obj2);