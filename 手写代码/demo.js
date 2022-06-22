// function promiseAll(promises) {

// }

// const a = new Promise((res) => {
//   setTimeout(() => {
//     res(1)
//   }, 3000)
// })

// const b = new Promise((res) => {
//   setTimeout(() => {
//     res(2)
//   }, 1000)
// })

// const c = new Promise((res, reject) => {
//   setTimeout(() => {
//     reject(1)
//   }, 500)
// })

// const d = new Promise((res) => {
//   setTimeout(() => {
//     res(4)
//   }, 2000)
// })

// promiseAll([a, b, c, d]).then((res) => {
//   console.log(res) // [1, 2, null, 4]
// })

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
  }
}

function deepcopy(obj) {
  let res = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    for (const key in obj) {
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

const obj2 = deepcopy(obj1)
obj2.a = 111
obj2.c.d = 444
console.log(obj1);
console.log(obj2);