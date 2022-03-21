console.log('script start')
let promise1 = new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise1 end')
}).then(function () {
  console.log('promise2')
})
setTimeout(function () {
  console.log('settimeout')
})
console.log('script end')

// 执行顺序
/**
 * script start
 * promise1
 * promise1 end
 * script end
 * promise2
 * settimeout
 */