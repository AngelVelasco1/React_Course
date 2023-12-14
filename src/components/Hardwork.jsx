import { useState, useMemo } from "react"


export const Hardwork = () => {
  const [numbers, setNumbers] = useState([100, 200, 300, 400])
  const [show, setShow] = useState(false)

  const GetMult = (numbers) => useMemo(() => {
    console.log("harword calcule executed");
    const totalMult = numbers.reduce((start, next) => start * next)
    return totalMult
  }, [numbers])


  const addNumbers = () => {
    setNumbers([...numbers, numbers[numbers.length - 1] + 100])
    console.log(numbers);
  }

  return (
    <>
      <h1>Calculate</h1>
      <p>{GetMult(numbers)}</p>
      <button onClick={() => setShow(!show)}>{show ? 'Show' : 'hide'}</button>
      <button onClick={addNumbers}>Add number</button>
    </>
  )
}