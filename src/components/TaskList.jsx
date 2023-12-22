import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from './hooks/useForm';
import { useReducer, useState } from 'react';

const defaultTasks = [{
  id: 1,
  name: "Name 1 task",
  done: false
}]

const newTask = {
  id: 2,
  name: "Name 2 task",
  done: false
}

const addTask = {
  type: '[Proggraming] Add task',
  payload: newTask
}
const updateTask = {
  type: '[Proggraming] Update task',
  payload: newTask
}
const deleteTask = {
  type: '[Proggraming] Delete task',
  payload: {}
}

const Reducer = (state = defaultTasks, action = {}) => {
  switch (action.type) {
    case '[Proggraming] Add task':
      return [...state, action.payload]
    case '[Proggraming] Update task':
      return [...state, action.payload]
    case '[Proggraming] Delete task':
      return state.filter(task => task.id !== action.payload)
    case '[Proggraming] Delete tasks':
      return action.payload
    default:
      return state;
  }
}

console.log(Reducer(defaultTasks, addTask));


export const TaskList = () => {
  const [tasks, dispatch] = useReducer(Reducer, defaultTasks)
  const { taskName, formInfo, onChangeValue } = useForm({ taskName: '' })
  const [taskDone, setTaskDone] = useState(false)

  const addTask = (e) => {
    e.preventDefault()
    if (!formInfo.taskName) return
    const newTask = {
      id: tasks.length + 1,
      name: formInfo.taskName,
      done: taskDone
    }
    console.log(newTask);
    const action = {
      type: '[Proggraming] Add task',
      payload: newTask
    }
    dispatch(action)
  }

  const deleteTask = ({id}) => {
    const action = {
      type: '[Proggraming] Delete task',
      payload: id
    }
    dispatch(action)
  }

  return (
    <>
      <Form onSubmit={addTask} className='w-25 m-auto mt-5  d-flex justify-content-center flex-column'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter task name" name='taskName' onChange={onChangeValue} value={taskName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='d-block'>Done</Form.Label>

          <Form.Check
            inline
            type='switch'
            name='taskDone'
            checked={taskDone}
            onChange={(e) => setTaskDone(e.target.checked)}
          />
        </Form.Group>

        <Button className='w-50 m-auto' variant="primary" type="submit">
          Submit
        </Button>
        <ul className=' fw-bold fs-5 mt-3'>
          {tasks.map(task => {
            return <li className='rounded-3 bg-white px-4 py-2 d-flex justify-content-between my-3' key={task.id}>
              <span>{task.name}{task.done ? '✅' : '⛔'}</span>
              <button onClick={() => deleteTask(task)} className=''>Delete</button>
            </li>
          })}
        </ul>
      </Form>
    </>
  )
}

