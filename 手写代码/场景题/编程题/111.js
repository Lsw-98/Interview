// 编程题，写个程序把 entry 转换成如下对象
var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
// var output = {
//   'a.b.c.dd': 'abcdd',
//   'a.d.xx': 'adxx',
//   'a.e': 'ae'
// }

function demo(obj, str = "", res = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === "object") {
        demo(obj[key], str + key + ".", res)
      } else {
        res[str + key] = obj[key]
      }
    }
  }
  return res
}

console.log(demo(entry));