import React, { useState, useEffect } from 'react'

export default function App() {

  const [count, setCount] = useState(1)
  useEffect(() => {
    setInterval(() => {
      console.log(count)
    }, 2000)
    //闭包陷阱
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div onClick={handleClick}>
      click to add, count: {count}
    </div>
  )

}
