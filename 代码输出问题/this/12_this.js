var a = 10;
var obt = {
  a: 20,
  fn: function () {
    var a = 30;
    console.log(this.a)
  }
}
obt.fn();
obt.fn.call();
(obt.fn)();

