Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

// 打印结果：
/**
 * 1
 * 2
 */

/**
 * Promise是可以链式调用的，由于每次调用 .then 或者 .catch 都会返回一个新的 promise，
 * 从而实现了链式调用, 它并不像一般任务的链式调用一样return this。
 * 上面的输出结果之所以依次打印出1和2，是因为resolve(1)之后走的是第一个then方法，
 * 并没有进catch里，所以第二个then中的res得到的实际上是第一个then的返回值。并且return 2会被包装成resolve(2)，被最后的then打印输出2。
 */