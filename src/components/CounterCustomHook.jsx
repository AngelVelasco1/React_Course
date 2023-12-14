import {  useState } from "react"
import { useCounter } from "./hooks/useCounter"


export const CounterCustomHook = () => {
  const { count, handleMinus, handleReset, handlePlus } = useCounter(0)
  const [value, setValue] = useState('')

  const getValue = (e) => {
    const value = parseInt(e.target.value)
    setValue(value)
  }
 

  return (
    <>
      <h1>Counter: {count}</h1>
        <label>Choose the interval counter</label>
      <form method="post">
        <input type="text" value={value} onChange={ getValue } />
      </form>
      <button onClick={() => handleMinus(value)}>-{value}</button>
      <button onClick={() => handleReset()}>Reset</button>
      <button onClick={() => handlePlus(value)}>+{value}</button>
    </>
  )
}       
