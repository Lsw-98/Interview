async function timeSleep(delay) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("执行完毕")
    }, delay);
  })
}

async function sleep(delay) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay);
  })
}