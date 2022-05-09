let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5
  }
}


let obj2 = Array.isArray(obj1) ? [] : {}

for (const key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    obj2[key] = obj1[key]
  }
}

obj2.a = 100
obj2.c.d = 400


console.log(obj1);
console.log(obj2);
