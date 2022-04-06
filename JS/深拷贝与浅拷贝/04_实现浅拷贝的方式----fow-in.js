// 只复制第一层的浅拷贝
function simpleCopy(obj1) {
  var obj2 = Array.isArray(obj1) ? [] : {};
  for (let i in obj1) {
    obj2[i] = obj1[i];
  }
  return obj2;
}
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = simpleCopy(obj1);
obj1.a = 3;
obj1.c.d = 4;
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.c.d); // 4
console.log(obj2.c.d); // 4