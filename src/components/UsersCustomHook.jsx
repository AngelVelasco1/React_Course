import Table from 'react-bootstrap/Table';
import { useFetch } from './hooks/useFetch';


export const UsersCustomHook = () => {
  const API = "https://jsonplaceholder.typicode.com/users"

  const { data, isLoading } = useFetch(API)


  return (
    <>
      <h1>Users</h1>
      {
        isLoading ? <h1>Loading...</h1> :
          <Table className='w-50 m-auto' striped bordered hover variant="dark">

            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>

              {
                data.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
      }

    </>
  )
}