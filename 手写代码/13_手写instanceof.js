// instanceof用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置

/**
 * 实现步骤：
 * 1. 首先获取类型的原型
 * 2. 获得对象的原型
 * 3. 然后一直循环判断对象的原型是否等于类型的原型，知道对象原型为null，因为原型链最终未null
 */


function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left)   // 获取对象的原型
  let prototype = right.prototype   // 获取构造函数的prototype对象

  // 判断构造函数的prototype对象是否在对象的原型链上
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}

let obj = {
  a: 1
}

console.log(myInstanceof(obj, String));
console.log(myInstanceof(obj, Array));
console.log(myInstanceof(obj, Object));