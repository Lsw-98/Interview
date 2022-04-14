const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})

const promise2 = promise1.finally(() => {
  console.log(666);
}).then(res => {
  console.log(res)
})

const promise3 = promise1.then(() => {
  console.log(777);
}).finally(res => {
  console.log(888)
})

console.log('1', promise1);
console.log('2', promise2);
