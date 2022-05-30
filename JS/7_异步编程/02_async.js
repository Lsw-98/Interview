async function async1() {
  console.log('async1 start');
  // await的含义为等待，也就是async函数需要等待awiat后面的函数执行完毕后在继续执行下面的代码
  await async2();
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start');
async1();
console.log('script end')

// 执行顺序
/**
 * script start
 * async1 start
 * async2
 * script end
 * async1 end 
 */