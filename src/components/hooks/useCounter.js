import { useState } from "react"


export const useCounter = (initialNumber) => {
  const [count, setCount] = useState(initialNumber)

  const handleMinus = (value) => {
    if (count - value < 0 ) return
    setCount(count - value)
  }
  const handleReset= () => {
    setCount(initialNumber)
  }
  const handlePlus = (value) => {
    setCount(count + value)

  }

  return {
    count,
    handleMinus,
    handleReset,
    handlePlus
  }
}