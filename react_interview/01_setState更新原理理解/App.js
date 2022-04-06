import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    //在组件初始化可以直接操作this.state
    this.state = {
      val: 0
    }
  }
  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    });
    //第一次输出
    console.log(this.state.val);
    this.setState({
      val: this.state.val + 1
    });
    //第二次输出
    console.log(this.state.val);
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      //第三次输出
      console.log(this.state.val);
      this.setState({
        val: this.state.val + 1
      });
      //第四次输出
      console.log(this.state.val);
    }, 0);
  }

  render() {
    return (
      <div>APP</div>
    )
  }
}
