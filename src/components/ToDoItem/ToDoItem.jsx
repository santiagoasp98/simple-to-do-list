/* eslint-disable react/prop-types */

import './ToDoItem.css'

const ToDoItem = ({ task } ) => {
  return (
    <div className='text-container'>{task.text}</div>
  )
}

export default ToDoItem