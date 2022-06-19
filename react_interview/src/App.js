import React, { useState, useEffect } from 'react'

export default function App() {
  const [obj, setObj] = useState({ c: 0, d: { a: 1 } })

  useEffect(() => {
    console.log(obj);
  })


  const handleClick = () => {
  }

  return (
    <div onClick={handleClick}>{obj.d.a}</div>
  )
}
