class Person {
  constructor(name) {
    this.name = name
  }

  teach() {
    console.log("我在上课！！！安静！！");
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  // 该方法在s实例化对象中的原型里
  speak() {
    console.log(`我是${this.name}，我今年${this.age}岁`);
  }
}

const s = new Student("lsw", 24)

// s实例化对象首先会在自身的原型对象中查找speak()方法，这里speak()方法使定义在Student中，所以s会找到并直接执行
s.speak()
// 在寻找teach()方法时，s首先在自身的原型对象中查找，发现没有找到，然后会顺着原型链到Student继承的Person类的原型对象上查找，
// 这里的Person是Student的原型。Student.__proto__ === Person.prototype
// 在Person型中查找到teach()方法，最终执行。
s.teach()

console.log(s);
