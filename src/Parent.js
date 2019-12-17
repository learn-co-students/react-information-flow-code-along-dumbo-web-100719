import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }
  
  // props from child that we are taking back to alter state (setstate)
  changeColor = (newChildColor) => {
    console.log(newChildColor)
    // to change state use setSate
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }
  render() {
    // console.log(this.changeColor)
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor} color={this.state.childrenColor} />
        <Child handleColorChange={this.changeColor} color={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
