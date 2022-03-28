function Person() {
  this.a = 1
  // return 1
  return this   // 当return一个引用值时，会改变实例化对象的this指向
}

var person = new Person()
console.log(person);