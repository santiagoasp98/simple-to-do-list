/* eslint-disable react/prop-types */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import './AddToDoForm.css'

const AddToDoForm = ({ addNewTask }) => {

  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: text
    }

    setText('')

    addNewTask(newTask)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        placeholder='Enter new task...'
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        Add Task!
      </button>
    </form>
  )
}

export default AddToDoForm