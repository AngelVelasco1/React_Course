import React from 'react'

export const BtnPlus = React.memo(({ add, value }) => {
  console.log("Button drawed");
  return (
    <button onClick={() => add(5)}>+{value}</button>
  )
})