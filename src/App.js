import React, { Component } from 'react'
import './App.css'
import Parent from './Parent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Amazing Color Generator!</h1>
        
        <Parent />
      </div>
    )
  }
}

export default App
