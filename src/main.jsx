import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { Component1, Component2, Component3 } from './components/Component.jsx'
import { Fragments } from './components/Fragments.jsx';
import { Props } from './components/Props.jsx'; */
import { Counter } from './components/Counter.jsx';
import './styles/index.css'

/* ReactDOM.createRoot(document.getElementById('component1')).render(
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

ReactDOM.createRoot(document.getElementById('fragment')).render(
  <React.StrictMode>
    <Fragments/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('props')).render(
  <React.StrictMode>
    <Props title= "Im the title" number= {4}/>
  </React.StrictMode>,
) */

ReactDOM.createRoot(document.getElementById('counter')).render(
  <React.StrictMode>
    <Counter value = {0}/>
  </React.StrictMode>,
)