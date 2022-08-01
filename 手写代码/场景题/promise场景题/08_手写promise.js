Promise.resolve = function (data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      data.then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else {
      resolve(data)
    }
  })
}

Promise.reject = function (res) {
  return new Promise((resolve, reject) => {
    reject(res)
  })
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    let count = 0

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        count += 1
        arr[i] = res
        if (count === promises.length) {
          resolve(arr)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })
}
