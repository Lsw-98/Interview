// 因为call、apply、bind都是函数，所以需要在Function构造函数的原型上写这三个方法（考察原型链）
// 接收的第一个参数是指定的this指向
// 第二个参数因为不知道为传入多少个参数进来，所以使用ES6的剩余参数接收
Function.prototype.myCall = function (context, ...args) {
  let result = null
  let key = Symbol("temp")
  // 判断context是否传入，如果未传入则设置为全局对象（因为JS有两种运行环境，分别是浏览器和Node）
  context = (context === null || context === undefined) ? globalThis : Object(context)
  // 将调用函数设为对象的属性
  // 这个属性出现的目的就是为了去调用这个函数，当函数调用完成后，就将这个属性删除
  // 如果指定的this原来就有fn这个属性，那会出现属性覆盖的情况，使用ES6的Symbol来避免
  // 使用ES5新增的增加属性的方式
  Object.defineProperty(context, key, {
    value: this
  })
  // 调用函数，如果有返回值，接收
  result = context[key](...args)
  // 将属性删除
  delete context[key]
  return result
}

function myMethod(a, b) {
  return a + b
}

console.log(myMethod.myCall({}, 2, 3))