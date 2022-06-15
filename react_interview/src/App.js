import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: [
        { tabName: "标签标题1", id: 1 },
        { tabName: "标签标题2", id: 2 },
        { tabName: "标签标题3", id: 3 },
      ],
      currentIndex: 1
    }
  }

  tabSwitch(id) {
    this.setState({
      currentIndex: id
    })
  }

  render() {
    const { tab, currentIndex } = this.state
    return (
      <>
        <div className='tab_box'>
          <h3>tab切换</h3>
          <ul>
            {
              tab.map((item) => {
                return <li key={item.id} onClick={() => { this.tabSwitch(item.id) }}>{item.tabName}</li>
              })
            }
          </ul>

          <div>
            {
              currentIndex === 1 && <div>Content of Tab Pane 1</div>
            }
            {
              currentIndex === 2 && <div>Content of Tab Pane 2</div>
            }
            {
              currentIndex === 3 && <div>Content of Tab Pane 3</div>
            }
          </div>
        </div>
      </>
    )
  }
}
