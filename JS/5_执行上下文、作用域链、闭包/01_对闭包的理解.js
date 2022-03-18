function A() {
  let a = 1
  window.B = function () {
    console.log(a);
  }
}

A()
B()   // 输出1