String.prototype.reverse = function (s) {
  s = s.split("")
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]]
    left += 1
    right -= 1
  }
  return s.join("")
}

let str = "abcdefg"
console.log(str.reverse(str));
