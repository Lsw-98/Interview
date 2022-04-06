let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

let obj2 = Array.isArray(obj1) ? [] : {}
for (let i in obj1) {
  obj2[i] = obj1[i]
}
obj1.a = 111
obj1.c.d = 444

console.log(obj1);
console.log(obj2);