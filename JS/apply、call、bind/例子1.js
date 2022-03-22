const name = "小王"
const age = 17

const obj = {
  name: "校长",
  objAge: this.age,
  func: function () {
    console.log(this.name + "年龄" + this.age)
  }
}

obj.func()   // 校长年龄undefined