function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve()
    }, 1000);
  })
}

//实现一个timeout函数,fn seconds秒内执行则成功
function timeout(fn, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 如果在秒数到达还未执行，则返回失败
      reject()
    }, seconds);

    fn().then(() => {
      // 如果fn返回了成功，则立即将当前的promise状态变为成功
      resolve()
    })
  })
}

// fn返回一个promise
// seconds：时间，单位秒
// 假设fn1 2秒执行
timeout(fn1, 2000).then(() => {
  console.log("成功")
}).catch(() => {
  console.log("失败")
})

