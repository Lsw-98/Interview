Promise.resolve = function (data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      data.then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else {
      resolve(res)
    }
  })
}

Promise.rejcet = function (data) {
  return new Promise((resolve, reject) => {
    data.catch(err => {
      reject(err)
    })
  })
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let arr = []

    for (let index = 0; index < promises.length; index++) {
      promises[index].then(res => {
        count += 1
        arr[index] = res
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
    for (let index = 0; index < promises.length; index++) {
      promises[index].then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })
}