function createInstance(defaultConfig) {
  // 实例化，创建一个上下文
  var context = new Axios(defaultConfig);

  // 平时调用的 get/post 等等请求，底层都是调用 request 方法
  // 将 request 方法的 this 指向 context(上下文)，形成新的实例
  var instance = bind(Axios.prototype.request, context);

  // Axios.prototype 上的方法 (get/post...)挂载到新的实例 instance 上，
  // 并且将原型方法中 this 指向 context
  utils.extend(instance, Axios.prototype, context);

  // Axios 属性值挂载到新的实例 instance 上
  // 开发中才能使用 axios.default/interceptors
  utils.extend(instance, context);

  return instance;
}