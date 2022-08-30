function newInterval(callback, delay) {
  setTimeout(function () {
    callback()
    newInterval(callback, delay)
  }, delay)
}