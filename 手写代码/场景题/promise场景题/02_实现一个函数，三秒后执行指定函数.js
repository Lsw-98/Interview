function myFun() {
  console.log("执行了");
}


async function timeSleep(delay) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("执行完毕")
    }, delay);
  })
}

timeSleep(3000).then(res => {
  myFun()
}).catch(err => {
  console.log(err);
})

