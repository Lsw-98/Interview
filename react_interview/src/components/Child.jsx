import React from 'react'

export default function Child(props) {
  const { message } = props
  const getMessage = () => {
    message("刘帅武")
  }

  return (
    <button onClick={getMessage}>点我返回消息</button>
  )
}
