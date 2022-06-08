import React, { useState, useEffect } from 'react'

export default function App() {

  const [count, setCount] = useState(1)
  useEffect(() => {
    setCount(count + 1)
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
