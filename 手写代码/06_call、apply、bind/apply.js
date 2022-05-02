/**
 * apply的实现步骤
 * 1. 判断对象调用是否为函数
 * 2. 判断传入的上下文是否存在，如果不存在设置为window
 * 3. 将函数作为上下文对象的一个属性
 * 4. 判断参数是否传入
 * 5. 使用上下文对象来调用这个方法，并保存返回结果
 * 6. 删除新增属性
 * 7. 返回结果 
 */


Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    console.log("type error");
  }
  context = context || window
  let res = null

  // 将函数设为对象的方法
  context.fn = this
  // 调用方法，判断参数是否传入
  if (arguments[1]) {
    res = context.fn(...arguments[1])
  } else {
    res = context.fn()
  }

  delete context.fn
  return res
}