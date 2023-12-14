import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from './hooks/useForm';
import { useEffect, useRef } from 'react';

export const FormCustomHook = () => {
  const defaultValues = {
    username: '',
    email: '',
    password: ''
  }

  const { onChangeValue, formInfo, username, email, password } = useForm(defaultValues)
  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(formInfo);
  }
  const person = {
    name: "Pene",
    age: 10
  }

  const inputRef = useRef()
  const changeRef = useRef(null);
  const objectRef = useRef(person)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <h1 className='text-center '>Form with custom hook</h1>
      <Form onSubmit={onSubmitForm} className='w-25 m-auto'>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control name="username" placeholder="username" value={username} onChange={onChangeValue} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control name="email" type='email' placeholder="email" value={email} onChange={onChangeValue} ref={inputRef} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control name="password" type='password' placeholder="password" value={password} onChange={onChangeValue} />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
      <div>
        <input ref={changeRef} />

        <button onClick={() => {
          changeRef.current.value = "Nuevo valor";
        }}>
          Cambiar el valor del input
        </button>
      </div>
      <div>
        <h2>Accediendo a un objeto</h2>
        <p>{objectRef.current.name}</p>
        <p>{objectRef.current.age}</p>
      </div>
    </>
  )
}