function myHasOwnProperty(obj) {
  for (let item of obj) {
    if (obj.hasOwnProperty(item)) {
      console.log(item + "有");
    } else {
      console.log(item + "没有");
    }
  }
}
