console.log(...[1, 2, 3]);
console.log(...[1, [2, 3, 4], 5]);
console.log(...[1, ...[2, 3, 4], 5]);

function add(x, y) {
  return x + y;
}
const numbers = [1, 2];
add(...numbers) // 3

// 复制数组
const arr1 = [1, 2, 3];
const arr2 = [...arr1];