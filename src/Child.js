import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    const {color , handleColorChange} = this.props
    return (
      <div onClick={() => handleColorChange(getRandomColor)}
        className="child"
        style={{ backgroundColor: getRandomColor() }}
      ></div>
    )
  }
}

export default Child
