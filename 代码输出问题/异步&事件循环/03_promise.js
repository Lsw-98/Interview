const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

/**
 * 输出结果：
 * 1
 * 2
 * 4
 * timerStart
 * timerEnd
 * success
 */

/**
 * 执行步骤如下：
 * 1. 按顺序执行promise中的代码，打印1
 * 2. setTimeout()放入微任务队列，等待同步任务执行完后再执行
 * 3. 打印2
 * 4. 由于promise的状态还是pending，promise.then()不执行
 * 5. 打印4
 * 6. 同步任务执行完成，执行微任务队列中的函数，打印timerStart
 * 7. 遇见resolve()，将promise的状态变为resolve，将promise.then()加入到微任务队列
 * 8. 打印timerEnd
 * 9. 执行promise.then()，打印success
 */