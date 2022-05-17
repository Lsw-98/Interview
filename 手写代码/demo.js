function Parent() {
  this.name = "parent"
  this.play = [1, 2, 3]
}

Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  Parent.call(this)
  this.type = "child"
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
const child1 = new Child()
const child2 = new Child()
child1.play.push(4)


console.log(child1)
console.log(child2)
console.log(child1.getName())