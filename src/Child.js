import React, { Component } from "react";
import { getRandomColor } from "./randomColorGenerator.js";

class Child extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{ backgroundColor: this.props.childColor }}
      ></div>
    );
  }
}

export default Child;
