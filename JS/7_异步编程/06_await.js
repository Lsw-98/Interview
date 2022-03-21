function testAsy(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000)
  }
  )
}
async function testAwt() {
  let result = await testAsy('hello world');
  console.log(result);
  console.log('cuger')
}
testAwt();
console.log('cug')

// 打印结果
/**
 * 首先输出cug
 * 然后await等待三秒，promise变为resolve状态，然后输出"hello world"
 * 紧接着输出cuger
 */