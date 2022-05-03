const name = "小王", age = 12
const obj = {
  name: "小张",
  objAge: this.age,
  func: function () {
    console.log(this.name + "年龄" + this.age);
  }
}

const db = {
  name: "约德尔人",
  age: 99,
}

obj.func.call(db)
obj.func.apply(db)
obj.func.bind(db)