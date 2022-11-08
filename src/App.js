import React, { Component, Fragment } from 'react'
// import Demo from './Components/1_setState/Demo.jsx'
import Demo from './Components/8_error_boundary/Parent'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Demo />
      </Fragment>
    )
  }
}
