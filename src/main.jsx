import React from 'react'
import ReactDOM from 'react-dom/client'
import { Component1, Component2, Component3 } from './components/Component.jsx'
import { Props } from './components/Props.jsx';
import { Counter } from './components/Counter.jsx';
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './components/ShoppingCart.jsx';
import { Listapp } from './components/Listapp.jsx';
import { CounterCustomHook } from './components/CounterCustomHook.jsx';
import { FormCustomHook } from './components/FormCustomHook.jsx';
import { UsersCustomHook } from './components/UsersCustomHook.jsx';
import { Hardwork } from './components/Hardwork.jsx';
import { UseCallback } from './components/UseCallback.jsx';
import { TaskList } from './components/TaskList.jsx';


ReactDOM.createRoot(document.getElementById('counter')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1 />}></Route>
        <Route path="/component2" element={<Component2 />}></Route>
        <Route path="/component3" element={<Component3 />}></Route>
        {/* fragments */}
        <></>
        {/* props */}
        <Route path="/props" element={<Props title="Im the title" number={4} />} ></Route>
        {/* hooks (useState) */}
        <Route path="/counter" element={<Counter value={0} />}></Route>
        {/* Conditionals, ternaries and map */}
        <Route path="/shopping" element={<ShoppingCart />}></Route>
        {/* useEffect, fetch and custom hooks */}
        <Route path="/list" element={<Listapp />}></Route>
        {/* useCounter (custom hook) */}
        <Route path="/useCounter" element={<CounterCustomHook />}></Route>
        {/* form with custom hook and useRef */}
        <Route path="/formCustom" element={<FormCustomHook />}></Route>
        {/* fetch custom hook */}
        <Route path="/fetchCustom" element={<UsersCustomHook />}></Route>
        {/* useMemo */}
        <Route path="/hardwork" element={<Hardwork />}></Route>
        {/* useCallback */}
        <Route path="/useCallback" element={<UseCallback />}></Route>
        {/* Reducer (useReducer)*/}
        <Route path="/useReducer" element={<TaskList />}></Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)