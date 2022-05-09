// 给了一个sleep函数， 实现功能，隔1s打印1，再隔2s打印2，隔3秒打印3
function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}


async function main() {
  // 写代码
  for (let i = 1; ; i++) {
    if (i % 3 === 0) {
      await sleep(3000)
      console.log(3);
    } else {
      await sleep(i % 3 * 1000)
      console.log(i % 3);
    }

    console.log(new Date);
  }
}

main()