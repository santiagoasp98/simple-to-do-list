/* eslint-disable react/prop-types */
import { ImCross } from "react-icons/im";

import ToDoItem from '../ToDoItem/ToDoItem'

import './ToDoList.css'

const ToDoList = ({ tasks, toggleCompleteTask, deleteTask }) => {
  return (
    <>
      {tasks.map((task) =>
        <div 
          key={task.id}
          className={`item-container ${task.completed ? 'completed' : ''}`}
          onClick={() => toggleCompleteTask(task.id)}
        >
          <ToDoItem task={task}/>
          <ImCross 
            className='delete-button'
            onClick={(e) => {
              e.stopPropagation()
              deleteTask(task.id)
            }}
          />
        </div>
      )}
    </>
  )
}

export default ToDoList