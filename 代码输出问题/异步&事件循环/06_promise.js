Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

// 代码输出：
/**
 * 1
 */

// Promise.resolve方法的参数如果是一个原始值，或者是一个不具有then方法的对象，
// 则Promise.resolve方法返回一个新的Promise对象，状态为resolved，Promise.resolve方法的参数，会同时传给回调函数。
// then方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为then(null)，这就会导致前一个Promise的结果会传递下面。

/**
 * 看到这个题目，好多的then，实际上只需要记住一个原则：.then 或.catch 的参数期望是函数，传入非函数则会发生值透传。
 * 第一个then和第二个then中传入的都不是函数，一个是数字，一个是对象，因此发生了透传，将resolve(1) 的值直接传到最后一个then里，直接打印出1。
 */