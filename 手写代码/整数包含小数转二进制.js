

function dec2bin(x) {
  x -= parseInt(x)
  const bins = []
  while (x) {
    x *= 2
    bins.push(x >= 1. ? 1 : 0)
    x -= parseInt(x)
  }
  return bins.slice(0, 8).join("")
}

function convert(num) {
  num = parseInt(num)
  var str = '';
  var temp = num;
  if (num < 0) {
    num = Math.abs(num) - 1;
  }
  var arr = new Array();
  arr = importArr(num, arr);
  if (temp < 0) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        arr[j] = 0;
      } else {
        arr[j] = 1;
      }
    }
  }
  for (i = arr.length; i > 0; i--) {
    str += arr[i - 1];
  }
  if (temp < 0) {
    str = '-' + str;
  }
  return str;
}

function importArr(num, arr) {
  for (var i = 0; 1; i++) {
    if (num / 2 >= 1) {
      arr[i] = num % 2;
      num = parseInt(num / 2);
    } else {
      arr[i] = 1;
      break;
    }
  }
  return arr;
}

console.log(convert(3.22) + "." + dec2bin(3.22));
