// var girl = {
//   name: "张三",
//   height: 180,
//   weight: 160,
//   detail: function () {
//     console.log("姓名：" + this.name);
//     console.log("身高：" + this.height);
//     console.log("体重：" + this.weight);
//   }
// }

// girl.detail()

/**
 * 打印结果：
 * 姓名：张三
 * 身高：180
 * 体重：160
 */
 
// 谁调用就指向谁，如果函数独立调用，那么该函数内部的this指向window
// 立即执行函数内部this指向window

var a = 0
var obj = {
  a: 2,
  foo: function () {
    console.log(this);

    function test() {
      console.log(this);
    }
    test()
  }
}

obj.foo()