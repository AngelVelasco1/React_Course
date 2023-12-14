import { useCallback, useState } from "react"
import { BtnPlus } from "./BtnPlus"

export const UseCallback = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState()

  const HandlePlus = useCallback((value) => {
    setValue(value)
    setCounter(current => current + value)
  }, [])

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <BtnPlus add={HandlePlus} value={value} />
    </>
  )
}