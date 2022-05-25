function addBigNumber(a, b) {
  let res = ""
  let temp = 0

  a = a.split("")
  b = b.split("")

  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop()
    res = (temp % 10) + res
    temp = temp > 9
  }

  return parseInt(res.replace(/^0+/, ""))
}