// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});


async function main() {
  for (let i = 0; i < 6; i++) {
    await sleep(1000)
    console.log(i);
  }
}

main()