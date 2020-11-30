import React from 'react'
import ReactDOM from 'react-dom'

import SomeComponent from 'somemodulename/SomeComponent'
import './styles/index.css'

function App () {
  return (
    <>
      <SomeComponent />
      <div>I'm the consumer app. The SomeComponent is remoted component.</div>
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
