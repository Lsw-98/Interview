var girl = {
  name: "张三",
  sayName: function () {
    console.log("我叫：" + this.name);
  }
}

var girl1 = {
  name: "李四"
}

var girl2 = {
  name: "王五"
}

girl.sayName.call(girl1)  // call会将this绑定的对象改为call传入的参数
girl.sayName.call(girl2)