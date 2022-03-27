import React, { Component } from 'react'

export default class App extends Component {

  // 静态函数:使某个函数只在一个源文件中有效，不能被其他源文件所用
  static defaultProps = {
    name: "刘帅武"
  }

  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
