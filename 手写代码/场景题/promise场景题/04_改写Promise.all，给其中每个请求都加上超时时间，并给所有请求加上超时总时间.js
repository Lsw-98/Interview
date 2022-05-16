//改写Promise.all：1. 给其中的每个请求都加上超时时间,并给所有请求加上超时总时间
function promiseAll(list) {
  let len = list.length
  let resArr = new Array.fill(0)
  let count = 0

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求总时间超时')
    }, 10000)
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        reject('单个请求超时')
      }, 5000)
      list[i].then((result) => {
        resArr[i] = result
        count++
        if (count >= len) {
          resolve(resArr)
        }
      }, (err) => {
        reject(err)
      })
    }
  })

}