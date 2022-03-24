function person() {
  var name = "张三"
  console.log(this.name);
}

var name = "李四"

person()

// 输出李四
// 全局变量或函数this默认绑定的是window