// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 100);
// }

// 输出 6 6 6 6 6

/**
 * 因为setTimeout是一个异步函数，所以会把循环全部执行完毕后再执行timer函数。
 * 当执行timer函数时i已经为6了，所以会输出5个6。
 */

// 解决方法1：使用let定义i
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 100);
// }

/**
 * 解决方法2：使用闭包
 *
 */

// for (var i = 1; i <= 5; i++) {
//   (function (j) {
//     console.log("111");
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 100);
//   })(i)
//   console.log("222");
// }

/**
 * 使用setTimeout的第三个参数，这个参数会被当成timer的参数传入
 */
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer(j) {
    console.log(j);
  }, 500, i)
}
