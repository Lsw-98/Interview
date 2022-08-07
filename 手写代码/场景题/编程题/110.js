// 编程题，请写一个函数，完成以下功能
// 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
// 

function demo(s) {
  const sArr = s.split(",").map(Number)
  const size = sArr.length
  const res = []
  let temp = []
  for (let i = 0; i < size; i++) {
    if (i === 0) {
      temp.push(sArr[i])
      continue
    }
    temp.push(sArr[i])
    if (sArr[i] + 1 !== sArr[i + 1]) {
      if (temp.length >= 2) {
        res.push([temp[0], temp[temp.length - 1]].join("~"))
      } else {
        res.push(temp[0])
      }
      temp = []
    }
  }
  return res.join(",")
}

const str = "1, 2, 3, 5, 7, 8, 10";
console.log(demo(str));
