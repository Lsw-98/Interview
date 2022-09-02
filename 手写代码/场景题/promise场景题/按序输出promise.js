const promises = [
  () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(1);
    }, 1000);
  }),
  () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(2);
    }, 500);
  }),
  () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(3);
    }, 700);
  })
]

function dfs(index) {
  if (index >= promises.length) return
  promises[index]().then(() => {
    dfs(index + 1)
  })
}

dfs(0)
