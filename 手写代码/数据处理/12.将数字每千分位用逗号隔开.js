function format(num) {
  num = String(num).split("").reverse()
  const index = num.indexOf(".")
  const res = []
  let count = 0
  if (index === -1) {
    // 无小数
    for (let i = 0; i < num.length; i++) {
      if (count > 0 && count % 3 === 0) {
        res.unshift(",")
        count = 1
        res.unshift(num[i])
        continue
      }
      res.unshift(num[i])
      count += 1
    }
  } else {
    // 有小数
    for (let i = 0; i <= index; i++) {
      res.unshift(num[i])
    }

    for (let i = index + 1; i < num.length; i++) {
      if (count > 0 && count % 3 === 0) {
        res.unshift(",")
        count = 1
        res.unshift(num[i])
        continue
      }
      res.unshift(num[i])
      count += 1
    }
  }
  return res.join("")
}


console.log(format())  // '12,323.33');
console.log(format(12345678))  // '12,323');