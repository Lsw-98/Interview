//父类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return this.x + this.y
  }
}
//子类
class ColorPoint extends Point {
  constructor(x, y, color) {
    // 必须调用super()函数，否则无法使用this
    super(x, y); //调用父类的constructor(x,y)
    this.color = color
  }

  toString() {
    return this.color + ' ' + super.toString
  }
}