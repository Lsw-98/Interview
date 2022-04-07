function add() {
  // 将参数赋值给args
  // 因为arguments是对象，要将它转化为数组
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    // 将inner接收到的参数加到args中
    args.push(...arguments)
    // 因为不知道有多少次add调用，所以要一直递归
    return inner
  }

  // 因为再返回的inner函数之前被调用了toString()
  // 所以返回的其实是一个字符串
  // 这里重写toString()方法，进行累加求和
  inner.toString = function () {
    return args.reduce(function (pre, cur) {
      return pre += cur
    })
  }
  return inner
}

const res = add(1, 5, 6)(2)(3)(4).toString()
console.log(res)
