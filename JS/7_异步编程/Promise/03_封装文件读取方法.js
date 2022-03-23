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
}).then(res => {   // 链式调用
  console.log(res);   // 打印undefined
})

/**
 * 第二个then中的res是由第二个then的返回值决定的，但第一个then没有return，所以第二个then的res为undefined
 */