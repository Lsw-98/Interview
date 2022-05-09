function fn1() {
  let count = 0
  function fn2() {
    count++
    console.log(count);
  }
  return fn2()
}
console.log(fn1);
fn1()
const b = fn1()
const c = fn1()
const d = fn1()

console.log(b, c, d);
