const name = "小王", age = 12
const obj = {
  name: "小张",
  objAge: this.age,
  func: function (fm, t) {
    console.log(this.name + "年龄" + this.age, "来自" + fm + "去往" + t);
  }
}

const db = {
  name: "约德尔人",
  age: 99,
}

obj.func.call(db, '成都', '上海')
obj.func.apply(db, ['成都', '上海'])
obj.func.bind(db, '成都', '上海')()
obj.func.bind(db, ['成都', '上海'])()