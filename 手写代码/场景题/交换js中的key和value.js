var obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5
  }
}

function fn(obj) {
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      fn(obj[key])
    } else {
      let value = obj[key];
      obj[value] = key;
      delete obj[key];
    }
  }
  return obj
}

var res = fn(obj)
console.log(res);