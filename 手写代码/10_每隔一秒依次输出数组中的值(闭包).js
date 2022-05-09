const arr = [0, 1, 2, 3, 4, 5]


for (let i = 0; i < arr.length; i++) {
  (function getValue(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  })(i)
}
