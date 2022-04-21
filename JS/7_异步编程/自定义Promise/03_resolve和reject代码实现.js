function Promise(executor) {
  this.PromiseState = "pending"
  this.PromiseResult = null
  // 这里的this指向Promise对象
  // console.log(this);
  // 因为在resolve里面，this指向的是window不是Promise对象，所以应该预先保存实例对象的this值
  const self = this


  function resolve(data) {
    // 这里的this指向window
    // console.log(this);   // 指向window
    // console.log(self);   // 指向promise对象
    self.PromiseState = "fulfilled"
    self.PromiseResult = data
  }

  function reject(err) {
    self.PromiseState = "rejected"
    self.PromiseResult = err
  }

  // 执行器函数是同步调用的
  executor(resolve, reject)
}

// 给Promise的原型上添加then方法
Promise.prototype.then = function (onResolved, onRejected) {

}