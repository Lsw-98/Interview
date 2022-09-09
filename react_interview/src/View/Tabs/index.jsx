import React, { useState, useRef } from 'react'
import TabItem from '../TabItem'
import './index.css'

export default function Tabs() {
  const data = ['React', 'Vue', 'Angular']
  const [value, setValue] = useState("")
  const DomHeight = useRef(null)

  const handleClick = (props) => {
    setValue(props)
    console.log(DomHeight.current.offsetHeight);
    // console.log(window.innerHeight);
  }

  return (
    <div>
      {
        data.map((item) => {
          return (
            <div
              key={item}
              onClick={() => { handleClick(item) }}
              style={{
                width: 500, height: 500, backgroundColor: "#ddd"
              }}
              ref={DomHeight}
            >
              {/* <TabItem key={item}>{item}</TabItem> */}
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
