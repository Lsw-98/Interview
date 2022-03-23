const fs = require('fs')
const util = require('util')
const myReadFile = util.promisify(fs.readFile)

async function main() {
  // 使用async和await操作看起来像同步操作
  let data1 = await myReadFile('D:/project/Interview/JS/7_异步编程/01_promise.js')
  let data2 = await myReadFile('D:/project/Interview/JS/7_异步编程/02_async.js')
  let data3 = await myReadFile('D:/project/Interview/JS/7_异步编程/05_await.js')

  console.log(data1 + data2 + data3);
}


main()   // 返回一个promise对象
