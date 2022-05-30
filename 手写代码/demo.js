function myNew() {
  let result = null
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)

  if (typeof constructor !== "function") {
    console.log("type error");
    return
  }

  newObject = Object.create(constructor.prototype)
  result = constructor.apply(newObject, arguments)

  let flag = result && (typeof result === "function" || typeof result === "object")
  return flag ? result : newObject
}

function Test() {
  this.a = 10
  this.b = 20
}

const res = myNew(Test)
console.log(res);