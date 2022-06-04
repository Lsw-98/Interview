function setFakeCookie(name, value, expire) {
  var obj = {
    "create_time": getNowDate(),
    "expire": expire,
    "value": value,
  }
  localStorage.setItem(name, JSON.stringify(obj));
}
function getFakeCookie(name) {
  var obj = JSON.parse(localStorage.getItem(name));
  if (!obj) {
    return "";
  }
  var visitorExpireSecond = new Date(obj.create_time).getTime() + parseInt(obj.expire) * 1000;
  var nowTime = getTimestamp();
  if (visitorExpireSecond <= nowTime) {
    localStorage.removeItem(name);
    return "";
  }
  return obj.value;
}

