import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    // console.log(this.props)
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor)}
        className="child"
        // name of prop is name defined on children component given by parent component
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child;
