import React, { useState } from 'react'
import TabItem from '../TabItem'
import './index.css'

export default function Tabs() {
  const data = ['React', 'Vue', 'Angular']
  const [value, setValue] = useState("")

  const handleClick = (props) => {
    setValue(props)
  }

  return (
    <div>
      {
        data.map((item) => {
          return (
            <div key={item} onClick={() => { handleClick(item) }}>
              <TabItem key={item}>{item}</TabItem>
            </div>
          )
        })
      }
      {
        <p>{value}</p>
      }
    </div>
  )
}
