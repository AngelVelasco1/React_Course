import { useState } from 'react';

export const Counter = ({value}) => {
    const [counter, setCounter] = useState(value);
    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick = {increase}>Click on Me</button>
        </>
    )
}