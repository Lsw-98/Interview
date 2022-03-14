Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('start');


/**
 * 输出结果：
 * start
 * promise1
 * timer1
 * promise2
 * timer2
 */

// 宏任务每次执行完后，都要查看微任务队列是否还有任务，若有则执行，若没有则进行新的宏任务

/**
 * 执行顺序：
 * 1. 将promise加入微任务队列
 * 2. 将timer1加入宏任务队列
 * 3. 执行同步代码，打印start
 * 4. 这样第一轮宏任务结束，查看微任务队列是否有微任务，执行Promise.resolve().then()，打印promise1
 * 5. timer2加入到宏任务队列
 * 6. 执行第二轮宏任务，首先执行timer1，打印timer1
 * 7. 将Promise.resolve().then()加入到微任务队列，宏任务执行结束
 * 8. 查看微任务队列是否有任务
 * 9. 打印promise2
 * 10 执行timer2宏任务，打印timer2
 */