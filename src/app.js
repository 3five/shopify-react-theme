import React, { Component }   from 'react'
import ReactDOM               from 'react-dom'

class HelloWorld extends Component {
  render() {
    return <h1>Hello world</h1>
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('content'))