import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = { newsArr: [] }

  // 插件挂载完毕
  componentDidMount() {
    setInterval(() => {
      // 获取原状态
      const { newsArr } = this.state
      // 模拟一条新闻
      const news = '新闻' + (newsArr.length + 1)
      // 更新状态
      this.setState({ newsArr: [news, ...newsArr] })
    }, 1000);
  }

  // 获取更新之前的快照
  getSnapshotBeforeUpdate() {
    // 获取在更新之前的高度
    return this.refs.list.scrollHeight
  }
  // 更新完成
  componentDidUpdate(preProps, preState, height) {
    // 每次更新 将scrollTop 的大小增加 一条新闻的高度 
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height
  }

  render() {
    return (
      <div className='list' ref='list'>
        {
          this.state.newsArr.map((n, index) => {
            return <div className='news' key={index}>{n}</div>
          })
        }
      </div>
    )
  }
}
