let obj1 = {
  f: function () {
    console.log("fff");
  },
  a: 1,
  b: 2,
  c: {
    d: 4,
  },

}

obj1.f()

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

obj2.a = 111
obj2.c.d = 444

obj1.f()
obj2.f()

console.log(obj1);
console.log(obj2);