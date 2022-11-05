import React, { Component } from 'react'
// import Demo from './Components/1_setState/Demo.jsx'
import Demo from './Components/3_stateHooks/Demo.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Demo x={50} />
      </div>
    )
  }
}
