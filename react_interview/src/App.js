import React, { useState } from 'react'

export default function App() {
  const [num, setNum] = useState([0, 1, 2, 3, 4])
  const test = () => {
    // num.push(5)
    // num.pop()
    num.splice(2)
    setNum([...num])
  }
  return (
    <div>
      <button onClick={test}>点我</button>
      {num}
    </div>
  )
}
