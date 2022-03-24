var a = 10
var obj = {
  a: 20,
  say: () => {    // 这里是箭头函数
    console.log(this.a)
  }
}
obj.say()

var anotherObj = { a: 30 }
obj.say.apply(anotherObj)
