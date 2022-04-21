function Promise(executor) {

  function resolve(data) {

  }

  function reject(data) {

  }

  // 执行器函数是同步调用的
  executor(resolve, reject)
}

// 给Promise的原型上添加then方法
Promise.prototype.then = function (onResolved, onRejected) {

}