// Promise.reject('err!!!')
//   .then((res) => {
//     console.log('success', res)
//   }, (err) => {
//     console.log('error', err)
//   }).catch(err => {
//     console.log('catch', err)
//   })

// 打印结果： error err!!!

/**
 * 我们知道，.then函数中的两个参数：
 * ● 第一个参数是用来处理Promise成功的函数
 * ● 第二个则是处理失败的函数
 * 也就是说Promise.resolve('1')的值会进入成功的函数，Promise.reject('2')的值会进入失败的函数。
 * 在这道题中，错误直接被then的第二个参数捕获了，所以就不会被catch捕获了，输出结果为：error err!!!'
 */

Promise.resolve()
  .then(function success(res) {
    throw new Error('error!!!')
  }, function fail1(err) {
    console.log('fail1', err)
  }).catch(function fail2(err) {
    console.log('fail2', err)
  })