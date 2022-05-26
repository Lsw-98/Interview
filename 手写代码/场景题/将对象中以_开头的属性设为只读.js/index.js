const obj = {
  a: 1,
  _b: 2,
  _c: "code",
}

/**
 * 将属性变为只读通过 `Object.defineProperty`方法
 * 该方法接受三个参数：属性所在的对象、属性名、描述符对象
 * 其中，描述符对象的取值为：configurable、 enumerable、 writable 和 value
 */

const keys = Object.keys(obj)

for (let i = 0; i < keys.length; i++) {
  Object.defineProperty(obj, keys[i], {
    writable: false,
    value: obj[keys[i]]
  })
}

obj._b = 222
console.log(obj);