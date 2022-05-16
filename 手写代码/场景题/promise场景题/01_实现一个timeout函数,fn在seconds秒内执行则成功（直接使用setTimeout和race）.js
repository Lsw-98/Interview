function fn1() {//模仿一个异步函数，此函数一秒以后执行完，返回成功的promise
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1)
      resolve(777)
    }, 1000)
  })
}

function timerCtrl(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("超时") //如果在秒数要求到达还未执行完
    }, time)
  })
}

function beforeTime(fn1, time) {//传入要监听的函数和秒数要求
  return new Promise((resolve, reject) => {
    Promise.race([timerCtrl(time), fn1()]).then((result) => {
      if (result == '超时') reject("超时")
      else resolve(result)
    })
  })
}

beforeTime(fn1, 2000).then((res) => {
  console.log("成功", res)
}, (err) => {
  console.log("失败", err)
})