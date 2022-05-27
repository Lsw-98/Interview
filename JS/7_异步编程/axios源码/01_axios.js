// 创建实例过程的方法
function createInstance(defaultConfig) {
  return instance;
}
// 实例化
var axios = createInstance(defaults);

// 创建独立的实例，隔离作用域
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// 导出实例
module.exports = axios;