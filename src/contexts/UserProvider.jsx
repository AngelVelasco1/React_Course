import { useState } from 'react'
import { userContext } from './userContext'


const user2 = {
  name: 'Penedetta',
  age: 38,
  email: 'pene@gmail.com',
  salary: 155277
}


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})  
  return (
    <userContext.Provider value={{user, user2, setUser}}>
      {children}
    </userContext.Provider>
  )
}
