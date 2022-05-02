/**
 * call的实现步骤
 * 1. 判断调用对象是否为函数
 * 2. 判断传入上下文对象是否存在，如果不存在，则设为window
 * 3. 处理传入的参数，截取第一个参数后的所有参数
 * 4. 将函数作为上下文对象的一个属性
 * 5. 使用上下文对象来调用这个方法，并保存返回结果
 * 6. 删除新增的属性
 * 7. 返回结果
 */

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