function myParse(htmlStr) {
  const tree = {}
  const size = htmlStr.length
  const list = []
  const stack = []

  for (let i = 0; i < size; i++) {
    if (htmlStr[i] === "<") {
      let temp = ""
      for (let j = i + 1; j < size; j++) {
        if (htmlStr[j] === ">") {
          list.push(temp)
          break
        }
        temp += htmlStr[j]
      }
      i += temp.length
    }
  }

  for (let i = 0; i < list.length; i++) {
    const temp = {
      type: list[i].toString(),
      value: "",
      children: []
    }

    if (list[i][0] === "/") {
      let end = ""
      for (let j = 1; j < list[i].length; j++) {
        if (list[i][j] === ">" || list[i][j] === " ") {
          if (stack[stack.length - 1] === end) {
            stack.pop()
          } else {
            tree[list[i - 1]].children.push(temp)
          }
          break
        }
        end += list[i][j]
      }
    } else {
      if (list.indexOf(list[i]) > 0) {
        tree[list[i - 1]].children.push(temp)
      } else {
        tree[list[i]] = temp
        stack.push(list[i])
      }
    }
  }
  return list
}

console.log(myParse("<div><image src='' /><p>123</p></div>"))
