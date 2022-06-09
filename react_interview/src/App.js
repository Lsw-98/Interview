import React, { Component } from 'react'

class Children extends React.Component {

  shouldComponentUpdate(newProps, nextState) {
    if (newProps.a === this.props.a) return false;
    return true;
  }

  render() {
    console.log('Children Update');
    return (
      <div>Children Component</div>
    )
  }
}

export default class App extends Component {
  state = {
    a: [1, 2, 3]
  }

  add = () => {
    this.setState({
      count: this.state.a[0] + 1
    })
  }

  render() {
    const { count } = this.state.a[0];
    return (
      <div>
        <button onClick={this.add}>加一</button>
        <Children />
        <p>count: {count}</p>
      </div>
    )
  }
}
