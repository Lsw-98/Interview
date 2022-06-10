function myObject() {
  let result = null
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)

  if (typeof constructor !== "function") {
    console.log("type err");
    return
  }

  newObject = Object.create(constructor.prototype)
  result = constructor.apply(newObject, arguments)
  let flag = result && (typeof result === "function" || typeof result === "object")
  return flag ? result : newObject
}

function myFun() {
  this.a = 10
  this.b = 20
}

console.log(myObject(myFun));