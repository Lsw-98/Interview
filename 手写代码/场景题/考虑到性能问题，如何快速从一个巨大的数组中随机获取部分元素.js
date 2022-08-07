// 比如有个数组有100K个元素，从中不重复随机选取10K个元素

/* 洗牌算法：
    1.生成一个0 - arr.length 的随机数
    2.交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.生成一个0 - arr.length - 1 的随机数
    4.交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
    依次类推，直至取完所需的10k个元素
*/

function demo(arr) {
  let res = []
  const size = arr.length
  for (let i = 0; i < size; i++) {
    if (res.length >= 10000) {
      break
    }
    const index = Math.floor(Math.random() * (size - i))
    res.push(arr[index])
    const temp = arr[size - 1 - i]
    arr[size - 1 - i] = arr[index]
    arr[index] = temp
  }
  return res
}


// 快速生成一个1到100W的数组
const arr = new Array(1000000).fill(1).map((item, index) => index + 1);
// const arr = new Array(1000000).fill(1).map(item => Math.floor(Math.random() * 1000000))
// console.log(arr);
const res = demo(arr);
res.sort((a, b) => {
  return a - b
})
console.log(res);