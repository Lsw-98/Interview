/**
 * 调用new的过程主要会发生一下4件事
 * 1. 首先创建了一个空的对象
 * 2. 设置原型，将对象的原型设置为函数的prototype对象
 * 3. 让函数的this指向这个对象，执行构造函数的代码
 * 4. 判断函数的返回值类型，如果是值类型，返回创建的对象；如果是引用类型，返回这个引用类型的对象
 */

function objectFactory() {
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)
  let result = null
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error")
    return
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype)
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments)
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function")
  // 判断返回结果
  return flag ? result : newObject
}

// 使用方法
// objectFactory(构造函数, 初始化参数)