import { useState } from 'react';

export const Forms = ({ storeProductValue }) => {
  const [inputValue, setInputValue] = useState('');

  const addValue = (e) => {
    setInputValue(e.target.value)
  }
  const sendValue = (e) => {
    e.preventDefault()
    storeProductValue(inputValue)
  }

  return (
    <form onSubmit={sendValue} method="post" >
      <input type="text" name="name" placeholder="Product Name" value={inputValue} onChange={addValue} />
      <button type='submit'>Add Product</button>
    </form>
  )
}