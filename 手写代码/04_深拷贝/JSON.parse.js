let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.a = 111
obj1.c.d = 444

console.log(obj1);
console.log(obj2);