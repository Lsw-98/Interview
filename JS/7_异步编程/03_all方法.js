const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  reject(2)
}).catch(err => {
  console.log(err);
})

const p3 = new Promise((resolve, reject) => {
  resolve(3)
})

Promise.all([p1, p2, p3]).then(res => {
  console.log(res);
})

// 输出结果：[ 1, 2, 3 ]