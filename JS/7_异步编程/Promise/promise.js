class Promise {
  // 构造方法
  constructor(executor) {
    // 添加PromiseState、PromiseResult属性
    this.PromiseState = "pendding"
    this.PromiseResult = null
    // callbacks：then方法用于保存回调函数
    // 这里使用数组，防止有多个then时前面的then被后面的then覆盖掉
    this.callbacks = []
    // 保存this的值   this为Promise实例化对象
    const self = this

    function resolve(data) {
      // promise的状态只能改变一次
      if (self.PromiseState !== 'pendding') return
      self.PromiseState = 'fulfilled'
      self.PromiseResult = data
      setTimeout(() => {
        // 当状态变为成功，调用回调函数
        self.callbacks.forEach(item => {
          item.onResolved(data)
        })
      }, 0);
    }

    function reject(data) {
      // promise的状态只能改变一次
      if (self.PromiseState !== 'pendding') return
      self.PromiseState = 'rejected'
      self.PromiseResult = data
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onRejected(data)
        })
      }, 0);
    }
    // throw抛出异常
    try {
      // 同步调用执行器函数
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // then方法
  then(onResolved, onRejected) {
    const self = this
    // 判断回调函数参数是否为一个函数
    if (typeof onRejected !== 'function') {
      onRejected = (err) => {
        throw err
      }
    }

    if (typeof onResolved !== 'function') {
      onResolved = (value) => {
        return value
      }
    }
    return new Promise((resolve, reject) => {
      // 封装函数
      function callback(type) {
        try {
          // 获取回调函数的执行结果
          let pResult = type(self.PromiseResult)
          if (pResult instanceof Promise) {
            pResult.then(res => {
              resolve(res)
            }, err => {
              reject(err)
            })
          } else {
            // 返回的不是Promise对象的话就将状态设为成功
            resolve(pResult)
          }
        } catch (error) {
          reject(error)
        }
      }
      if (this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        }, 0);
      }

      if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        }, 0);
      }

      if (this.PromiseState === 'pendding') {
        // 保存then的回调函数，以便于实现异步操作
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

  // catch方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // resolve方法
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      } else {
        resolve(value)
      }
    })
  }

  // reject方法
  static reject(err) {
    return new Promise((resolve, reject) => {
      reject(err)
    })
  }

  // all方法
  static all(promises) {
    return new Promise((resolve, reject) => {
      // 计数变量
      let count = 0
      // 设置一个成功数组
      let arr = []
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(res => {
          count += 1
          // 将当前成功的promise对象存到数组中
          arr[i] = res
          if (count === promises.length) {
            resolve(arr)
          }
        }, err => {
          reject(err)
        })
      }
    })
  }

  // race方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
}
