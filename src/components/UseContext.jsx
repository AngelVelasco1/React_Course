import { useContext } from "react"
import { userContext } from "../contexts/userContext"
import Table from 'react-bootstrap/Table';


export const UseContext = () => {
  const { user, user2 } = useContext(userContext)
  return (
    <Table className="mt-5"  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td>{user.salary}</td>
        </tr>
        <tr>
          <td>{user2.name}</td>
          <td>{user2.age}</td>
          <td>{user2.email}</td>
          <td>{user2.salary}</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> )
}
