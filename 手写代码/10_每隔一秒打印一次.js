// 需要实现的函数 
function repeat(func, times, wait) {
  return async function (...args) {
    for (let i = 0; i < times; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          func.apply(this, args)
          resolve()
        }, wait);
      })
    }
  }
}

// 使下面调用代码能正常工作 
const repeatFunc = repeat(console.log, 4, 1000);
repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔1秒
