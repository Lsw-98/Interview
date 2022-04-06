function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          result[key] = deepClone(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}

var obj = { name: "张三", dog: { name: "小黑" } };
var newObj = deepClone(obj);
console.log(obj, newObj);//{name:"张三",dog:{name:"小黑"}} {name:"张三",dog:{name:"小黑"}};
console.log(obj == newObj);//false
newObj.dog.name = "小花";
console.log(obj, newObj);//{name:"张三",dog:{name:"小黑"}} {name:"张三",dog:{name:"小花"}};