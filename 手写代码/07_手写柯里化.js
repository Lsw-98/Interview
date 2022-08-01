function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function () {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}


var abc = function (a, b, c) {
  return [a, b, c].reduce((pre, cur) => {
    return pre += cur
  });
};


var curried = curry(abc);
console.log(curried(1)(2)(3));
// console.log(curried(1, 2)(3));
// console.log(curried(1, 2, 3)); 