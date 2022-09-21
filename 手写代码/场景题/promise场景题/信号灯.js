/**
* 红色 3s
* 黄色 2s
* 绿色 5s
*/
const stateList = [{ name: '红', time: 3000 }, { name: '黄', time: 2000 }, { name: '绿', time: 5000 }]
const total = stateList.reduce((pre, cur) => pre + cur['time'], 0)

async function changeColor() {
  console.log('开始循环')
  for (let i = 0; i < stateList.length; i++) {
    await new Promise((resolve) => {
      console.log(stateList[i].name)
      setTimeout(() => {
        resolve()
      }, stateList[i].time)
    })
  }
}

changeColor()
setInterval(async () => {
  changeColor()
}, total)