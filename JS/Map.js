// // 创建对象
// const apples = { name: 'Apples' };
// const bananas = { name: 'Bananas' };
// const oranges = { name: 'Oranges' };

// // 创建新的 Map
// const fruits = new Map();

// // 给Map添加新元素
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits);


const apples = { name: 'Apples' }
const bananas = { name: 'Bananas' }
const oranges = { name: 'Oranges' }

// 将 Array 传递给 new Map() 构造函数：
const fruits = new Map([
  [apples, 500],
  [bananas, 300],
  [oranges, 200]
])
// console.log(fruits);

// console.log(fruits.size);
fruits.set(apples, 1000);
console.log(fruits);