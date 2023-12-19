import { useEffect, useState } from 'react'
import { MagicMotion } from "react-magic-motion"

import './App.css'
import ToDoList from './components/ToDoList/ToDoList'
import AddToDoForm from './components/AddToDoForm/AddToDoForm'

function App() {

  const [tasks, setTasks] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)

    const getDate = () => {
      const date = new Date()
      return date
    }

    const date = getDate()

    setDate(
      `${ date.toLocaleString('en', { weekday: 'long' }) } ` +
      `${ date.toLocaleString('en', { day: 'numeric' }) }, ` +
      `${ date.toLocaleString('en', { month: 'short' }) } ` +
      `${ date.toLocaleString('en', { year: 'numeric' }) }`
    )
  }, [])

  const addNewTask = (newTask) => {
    if (!newTask.text.trim()) {
      window.alert('Enter some text D:')
      return
    }
    
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const toggleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {...task, 'completed': !task.completed}
      return task
    })
    setTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return (
    <MagicMotion>
      <div className='main-container'>
        <h1>{date}</h1>
        <div className='list-container'>
          <ToDoList
            tasks={tasks}
            toggleCompleteTask={toggleCompleteTask}
            deleteTask={deleteTask}
          />
        </div>
        <div className='form-container'>
          <AddToDoForm addNewTask={addNewTask} />
        </div>
      </div>
    </MagicMotion>
  )
}

export default App