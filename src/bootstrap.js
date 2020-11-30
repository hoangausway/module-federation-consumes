import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'

import SomeComponent from 'somemodulename/SomeComponent'

import { example } from './js/example'

function App () {
  return (
    <>
      <h3 style={{ textAlign: 'center', paddingTop: '0.75rem' }}>
        {example()}
      </h3>
      <SomeComponent />
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
