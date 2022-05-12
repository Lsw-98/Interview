import React from 'react'
import './index.css'

export default function TabItem(props) {
  return (
    <div>
      {
        props.children === 'React' ? <span>React</span> :
          props.children === "Vue" ? <span>Vue</span> : <span>Angular</span>
      }
    </div>
  )
}
