function Supermarket() {
  Supermarket.prototype.product = "口罩"
}

function Shop() {
  Shop.prototype = new Supermarket()    // 又因为这里实例化了Supermarket，所以person.__proto__ === Supermarket.prototype
}

const person = new Shop()   // 这里person.__proto__ === Shop.prototype

console.log(person.product);
// 所以最后可以在Supermarket中找到product