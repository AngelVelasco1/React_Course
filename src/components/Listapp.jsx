import { useState } from "react"
import { List } from "./List"

export const Listapp = () => {
  const [endpoint, setEndpoint] = useState('users')
  const handleList = () => {
    if (endpoint == 'users') {
      setEndpoint('comments') 
    } else {
      setEndpoint('users') 

    }
  }
  return (
    <>
      {endpoint === 'users' ? <h1>Users List</h1> : <h1>Comments list</h1>}
      <List endpoint={endpoint} />
      <button onClick={handleList}>Change list</button>
    </>
  )
}