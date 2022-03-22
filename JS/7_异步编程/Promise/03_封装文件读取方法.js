function myFunc(path) {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

myFunc('D:/project/Interview/JS/7_异步编程/Promise/fs.txt').then((res) => {
  console.log(res.toString());
}, (err) => {
  console.log(err);
})