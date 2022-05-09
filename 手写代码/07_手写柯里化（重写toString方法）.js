function add() {
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    args.push(...arguments)
    return inner
  }

  inner.toString = function () {
    return args.reduce(function (pre, cur) {
      return pre += cur
    })
  }

  return inner
}

let test = add(1)(2)(3).toString()
console.log(test);
