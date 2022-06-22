import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    this.toggleBtnClick = this.toggleBtnClick.bind(this, this.state.isToggleOn)
  }
  render() {
    // console.log(this);
    return (
      <button onClick={this.toggleBtnClick}>
        {this.state.isToggleOn ? 'Button On' : 'Button Off'}
      </button>
    );
  }
  toggleBtnClick(isToggleOn, e) {
    console.log('Now state is' + isToggleOn + ' before to convert.');
    this.setState({
      isToggleOn: !isToggleOn
    })
  }
}
