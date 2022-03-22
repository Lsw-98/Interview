let obj2 = {
  a: 10,
  b: function (n) {
    let f = (n) => n + this.a;
    return f(n);
  },
  c: function (n) {
    let f = (n) => n + this.a;
    let m = {
      a: 20
    };
    return f.call(m, n);
  }
};
console.log(obj2.b(1));    // 11
console.log(obj2.c(1));    // 11