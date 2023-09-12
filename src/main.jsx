import React from 'react'
import ReactDOM from 'react-dom/client'
import { Component1, Component2, Component3 } from './Component1.jsx'

ReactDOM.createRoot(document.getElementById('component1')).render(
  <React.StrictMode>
    <Component1/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('component2')).render(
  <React.StrictMode>
    <Component2/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('component3')).render(
  <React.StrictMode>
    <Component3/>
  </React.StrictMode>,
)