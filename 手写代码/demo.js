const s1 = new Set([1, 2, 3, 4])
const s2 = new Set([1, 4, 5, 6])

// 并集
const res = [...new Set([...s1, ...s2])]
console.log(res)

// 差集
const res2 = [...new Set([...s1].filter(item => {
  return !s2.has(item)
}))]
console.log(res2)

// 交集
const res3 = [...new Set([...s1].filter(item => {
  return s2.has(item)
}))]
console.log(res3)