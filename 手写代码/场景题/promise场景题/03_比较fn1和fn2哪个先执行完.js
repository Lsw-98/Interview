function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fn1先完成")
    }, 1000);
  })
}

function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fn2先完成")
    }, 2000);
  })
}

Promise.race([fn1(), fn2()]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})