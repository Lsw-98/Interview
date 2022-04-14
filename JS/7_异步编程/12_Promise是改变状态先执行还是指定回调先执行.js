let promise1 = new Promise((resolve, reject) => {
  resolve("ok1")
  console.log(111);
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok2")
  }, 100)
}).then(res => {
  console.log(222);
  console.log(res);
}).catch(err => {
  console.log(err);
})
