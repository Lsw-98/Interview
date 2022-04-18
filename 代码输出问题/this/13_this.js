function a(xx) {
  this.x = xx;
  return this
};
var x = a(5);
var y = a(6);

console.log(x.x)
console.log(y.x)

