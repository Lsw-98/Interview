const promise = new Promise((resolve, reject) => {
  resolve('success1');
  reject('error');
  resolve('success2');
});

promise.then((res) => {
  console.log('then:', res);
}).catch((err) => {
  console.log('catch:', err);
})

/**
 * 输出结果：
 * then: success1
 */

// 当promise的状态发生变化时，就不会在改变状态，下面的两个状态也不会再执行