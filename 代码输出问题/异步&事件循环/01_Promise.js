const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);

});
promise.then(() => {
  console.log(3);
});

console.log(4);


// 这里的打印结果为1 2 4 
/**
* 因为promise.then()是微任务，他会在所有宏任务执行结果后执行，
* 同时需要promise内部的状态发生变化，这里promise内部状态未发生变化，一直处于pending状态，所以不输出3
*/