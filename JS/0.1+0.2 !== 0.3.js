console.log(0.1 + 0.2)   // 0.30000000000000004
// 保留一位小数  
console.log((0.1 + 0.2).toFixed(2))   // 0.30

// 同乘一个很大的数字，运算后再除
const a = 0.1 * 1000
const b = 0.2 * 1000
const res = (a + b) / 1000
console.log(res);