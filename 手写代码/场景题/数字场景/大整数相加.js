function sumBigNumber(a, b) {
  let res = ""
  let temp = 0

  a = a.split("")
  b = b.split("")

  while (a.length || b.length | temp) {
    temp += ~~a.pop() + ~~b.pop()
    res = (temp % 10) + res
    temp = temp > 9
  }

  return parseInt(res.replace(/^0+/, ""))
}

console.log(sumBigNumber(String(Number.MAX_SAFE_INTEGER + 1), String(Number.MAX_SAFE_INTEGER + 2)));

/**
 * 主要思路是：
 * 1. 用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化
 * 2. 初始化res，temp来保存中间的计算结果，并将两个字符串转化为数组，以便进行每一位的加法运算
 * 3. 将两个数组的对应的位进行相加，两个数相加的结果可能大于10，所以要进位，并对10取余
 * 4. 判断当前位是否大于9，也就是是否会进位，若进位则将temp赋值为true，因为在加法中，true会自动转化为1，以便下一次相加
 */
