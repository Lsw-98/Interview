function multiRequest(urls, maxNum) {
  const len = urls.length; // 请求总数量
  const res = new Array(len).fill(0); // 请求结果数组
  let sendCount = 0; // 已发送的请求数量
  let finishCount = 0; // 已完成的请求数量
  return new Promise((resolve, reject) => {
    // 首先发送 maxNum 个请求，注意：请求数可能小于 maxNum，所以也要满足条件2
    // 同步的 创建maxNum个next并行请求 然后才去执行异步的fetch 所以一上来就有5个next并行执行
    while (sendCount < maxNum && sendCount < len) {
      next();
    }
    function next() {
      let current = sendCount++; // 当前发送的请求数量，后加一 保存当前请求url的位置
      // 递归出口
      if (finishCount >= len) {
        // 如果所有请求完成，则解决掉 Promise，终止递归
        resolve(res);
        return;
      }
      fetch(urls[current]).then(result => {//利用fetch发请求
        resultArr[current] = result
      }).catch(err => {
        resultArr[current] = err
      }).finally(() => {
        finishCount++
        if (sendCount < len) { //如果未发送完，继续发送
          _next()
        }
      })
    }
  });
}