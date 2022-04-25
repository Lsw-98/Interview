Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.log("type error");
  }

  // 获取参数
  let args = [...arguments].slice(1)
  let result = null

  // 判断context是否传入，如果未传入则设置为window
  context = context || window
  // 将调用函数设为对象的方法
  context.fn = this
  // 调用函数
  result = context.fn(...args)
  // 将属性删除
  delete context.fn
  return result
}