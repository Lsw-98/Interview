obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4
  }
}

obj2 = JSON.parse(JSON.stringify(obj1))

obj1.a = 111
obj2.c.d = 444
console.log(obj1);   // { a: 111, b: 2, c: { d: 4 } }
console.log(obj2);   // { a: 1, b: 2, c: { d: 444 } }
