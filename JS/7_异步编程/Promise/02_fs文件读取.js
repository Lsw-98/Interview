const fs = require('fs')

// 回调函数形式
// fs.readFile('D:/project/Interview/JS/7_异步编程/Promise/fs.txt', (err, data) => {
//   if (err) throw err
//   console.log(data.toString());
// })

// 使用promise
new Promise((resolve, reject) => {
  fs.readFile('D:/project/Interview/JS/7_异步编程/Promise/fs.txt', (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
}).then((res) => {
  console.log(res.toString());
}, (err) => {
  console.log(err);
})