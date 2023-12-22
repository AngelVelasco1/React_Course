import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from './hooks/useForm.js'
import { userContext } from '../contexts/userContext.jsx';
import { useContext } from 'react';

export const Login = () => {
  const initialForm = {
    name: '',
    email: '',
    age: '',
    salary: ''
  }
  const { formInfo, name, email, age, salary, onChangeValue } = useForm(initialForm)

  const { setUser } = useContext(userContext)
  const sendData = (e) => {
    e.preventDefault();
    setUser(formInfo)
  }

  return (
    <Form className='w-25 m-auto' onSubmit={sendData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={onChangeValue} name="name" type="text" placeholder="Enter name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control value={email} onChange={onChangeValue} name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} name="age" onChange={onChangeValue} type="text" placeholder="Enter age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control value={salary} name="salary" onChange={onChangeValue} type="text" placeholder="salary" />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

