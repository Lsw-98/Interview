Array.prototype.myForeach = (func, obj) => {
  const len = this.length
  let that = arguments[1] ? aruguments[1] : window
  for (let i = 0; i < len; i++) {
    func.call(that, this[i], i, this)
  }
}
