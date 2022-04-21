function Promise(executor) {
  this.PromiseState = "pending"
  this.PromiseResult = null
  // 这里的this指向Promise对象
  // console.log(this);
  // 因为在resolve里面，this指向的是window不是Promise对象，所以应该预先保存实例对象的this值
  const self = this

  // 用于在异步任务回调中保存回调函数
  this.callbacks = []


  function resolve(data) {
    if (self.PromiseState !== "pending") return
    // 这里的this指向window
    // console.log(this);   // 指向window
    // console.log(self);   // 指向promise对象
    self.PromiseState = "fulfilled"
    self.PromiseResult = data

    // 执行成功的回调
    self.callbacks.forEach(item => {
      item.onResolved(data)
    })
  }

  function reject(err) {
    if (self.PromiseState !== "pending") return

    self.PromiseState = "rejected"
    self.PromiseResult = err

    // 执行失败的回调
    self.callbacks.forEach(item => {
      item.onRejected(err)
    })
  }

  // 捕获异常
  try {
    // 执行器函数是同步调用的
    executor(resolve, reject)
  } catch (error) {
    // 调用reject函数修改Promise对象的状态和值
    reject(error)
  }
}

// 给Promise的原型上添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this

  // 判断回调函数的参数
  if (typeof onRejected !== "function") {
    onRejected = (err => {
      throw err
    })
  }

  if (typeof onResolved !== "function") {
    onResolved = (res => {
      return res
    })
  }

  // 返回一个Promise对象
  return new Promise((resolve, reject) => {
    // 这里的this指向Promise对象
    // console.log(this);

    // 封装回调函数执行结果
    function callback(type) {
      try {
        // 获取回调函数的执行结果
        let result = type(self.PromiseResult)
        // 判断执行结果类型
        if (result instanceof Promise) {
          // 结果为Promise对象
          result.then(res => {
            resolve(res)
          }, err => {
            reject(err)
          })
        } else {
          // 结果状态为成功
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    // 调用回调函数
    if (this.PromiseState === "fulfilled") {
      callback(onResolved)
    }

    if (this.PromiseState === "rejected") {
      callback(onRejected)
    }

    // 异步任务回调
    if (this.PromiseState === "pending") {
      // 保存回调函数
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      })
    }
  })
}

// 添加catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

// 添加resolve方法
Promise.resolve = function (res) {
  return new Promise((resolve, reject) => {
    if (res instanceof Promise) {
      res.then(data => {
        resolve(data)
      }).catch(err => {
        reject(err);
      })
    } else {
      // 如果不是promise对象，将状态设置为成功
      resolve(res)
    }
  })
}

// 添加reject方法
Promise.reject = function (err) {
  return new Promise((resolve, reject) => {
    reject(err)
  })
}
