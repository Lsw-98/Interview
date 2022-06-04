function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  console.log(this.a);
  console.log(a);
  console.log(this.a + a);
  foo();
}
var a = 2;

bar.call({ a: 4 });