function takeLongTime(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step1 with ${n}`);
  return takeLongTime(n);
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return takeLongTime(n);
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return takeLongTime(n);
}

// 使用promise来处理三个函数的调用
// function doIt() {
//   console.time("doIt");
//   const time1 = 300;
//   step1(time1)
//     .then(time2 => step2(time2))
//     .then(time3 => step3(time3))
//     .then(result => {
//       console.log(`result is ${result}`);
//       console.timeEnd("doIt");
//     });
// }
// doIt();

// 使用await来处理三个函数的调用
async function doIt() {
  console.time("doIt");
  const time1 = 300;
  const time2 = await step1(time1);
  const time3 = await step2(time2);
  const result = await step3(time3);
  console.log(`result is ${result}`);
  console.timeEnd("doIt");
}
doIt();

// 打印结果：
/**
 * doIt
 * step1 with 300
 * step2 with 500
 * step3 with 700
 * result is 900
 * doIt: 1.527s
 */