const p1 = new Promise((resolved, rejected) => {
  resolved(1)
})

const p2 = new Promise((resolved, rejected) => {
  resolved(2)
})

const p3 = new Promise((resolved, rejected) => {
  resolved(3)
})

Promise.race([p1, p2, p3]).then(res => {
  console.log(res);
})

// 输出结果：[ 1, 2, 3 ]