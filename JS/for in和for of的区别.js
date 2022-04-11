// 遍历对象
// 类数组对象
let obj = {
  0: 'one',
  1: 'two',
  length: 2
};

// 先将类数组对象转化为数组
// obj = Array.prototype.slice.call(obj)
obj = Array.from(obj)

for (let item of obj) {
  console.log(item);
}


for (let key in obj) {
  console.log(key);
}

// 遍历数组
const arr = [1, 2, 3, 4, 5]
for (let item of arr) {
  console.log(item);
}

for (let key in arr) {
  console.log(key);
}