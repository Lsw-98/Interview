function InterceptorManager() {
  // 存放 use 注册的回调函数
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  // 注册成功和失败的回调函数
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  // 删除注册过的函数
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach(fn) {
  // 遍历回调函数，一般内部使用多
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};