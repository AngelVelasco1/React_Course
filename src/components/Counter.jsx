import { useState } from 'react';

export const Counter = ({ value }) => {
  const [count, setCount] = useState(value);

  const increase = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <p>Current number: {count}</p>
      <button onClick={increase}>Plus</button>
    </>
  )
} 