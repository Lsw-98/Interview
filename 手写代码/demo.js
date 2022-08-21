var a = 0
function f(n) {
  a += 1
  console.log(a)
  if (n == 0) return 0
  if (n == 1) return 1

  return f(n - 1) + f(n - 2)
}

f(5)