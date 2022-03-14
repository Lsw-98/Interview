const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})

const promise2 = promise1.then(res => {
  console.log(res)
})

console.log('1', promise1);
console.log('2', promise2);


/**
* 输出结果：
* promise1
* 1 Promise {'resolve1'}
* 2 Promise {<pending>}
* resolve1
*/

/**
* 如果直接输出promise1，会打印出它的状态值和参数。
* 执行逻辑如下：
* 1. 首先按照顺序执行promise1中回调函数的代码
* 2. promise1调用resolve()，promise1的状态变为resolve
* 3. promise2调用了promise1的then()函数，
*    将其放入微任务队列，等同步函数执行完在执行微任务队列中的语句
* 4. 因为promise2也是一个Promise函数，则promise2当前的状态为pending
* 5. 执行console.log('1', promise1)，输出1和promise1的状态和参数值
* 6. 执行console.log('2', promise2)，输出2和promise2的状态和参数值
* 7. 最后执行微任务队列，打印resolve
*/