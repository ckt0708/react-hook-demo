import React from 'react'
import './App.css'
import Prize from './Prize'
import UseState from "./useState";

function App () {
  return (
    <div className="container">
        <UseState name="小可爱"></UseState>
        <Prize />
    </div>
  )
}

export default App
