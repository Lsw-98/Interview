var myObject = {
  foo: "bar",
  func: function () {
    var self = this;   // myObject
    console.log(this.foo);
    console.log(self.foo);
    (function () {
      console.log(this.foo);
      console.log(self.foo);
    }());
  }
};

myObject.func();

/**
 * bar
 * bar
 * undefined
 * bar 
 */