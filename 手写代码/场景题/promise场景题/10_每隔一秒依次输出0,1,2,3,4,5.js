// 模拟其他语言中的 sleep，实际上可以是任何异步操作
async function main() {
  for (let i = 1; i < 6; i++) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    })
    console.log(i);
  }
}

main()