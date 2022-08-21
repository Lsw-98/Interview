// 该方法存在构造函数的原型上，即数组实例的原型上。
Array.prototype.myReduce = function (fn, initValue) {
  if (initValue === undefined && !this.length) {
    throw new Error('myReduce of empty array with no initial value');
  }
  // let result = initValue === undefined ? this[0] : initValue;不要这样写
  let result = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    result = fn(result, this[i], i, this);
  }
  return result;
}

const arr = [1, 2, 3, 4].myReduce((pre, cur) => {
  return pre += cur
})

console.log(arr)