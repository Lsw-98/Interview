function CancelToken(executor) {
  var resolvePromise;
  /**
   * 创建处于 pengding 状态的 promise，将 resolve 存放在外部变量 resolvePromise
   * 外部通过参数 { cancelToken: new CancelToken(...) } 传递进 axios 内部，
   * 内部调用 cancelToken.promise.then 等待状态改变，当外部调用方法 cancel 取消请求，
   * pendding 状态就变为 resolve，即取消请求并且抛出 reject(message)
   */
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  // 保留 this 指向，内部可调用
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // 取消过的直接返回
      return;
    }
    // 外部调用 cancel 取消请求方法，Cancel 实例化，保存 message 并增加已取消请求标示
    //  new Cancel(message) 后等于 { message,  __CANCEL__ : true}
    token.reason = new Cancel(message);
    // 上面的 promise 从 pedding 转变为 resolve,并携带 message 传递给 then
    resolvePromise(token.reason);
  });
}
// 挂载静态方法
CancelToken.source = function source() {
  var cancel;
  /**
   * 构造函数 CancelToken 实例化，用回调函数做参数，并且回调函数
   * 接收 CancelToken 内部的函数 c，保存在变量 cancel 中，
   * 后面调用 cancel 即取消请求
  */
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;