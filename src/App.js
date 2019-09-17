import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Your app goes here.
        </div>
      </div>
    )
  }
}

export default connect()(App)
