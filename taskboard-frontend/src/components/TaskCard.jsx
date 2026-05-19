import { useState, useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { PriorityBadge } from './PriorityBadge'

export const TaskCard = ({ task, onEdit, onDelete }) => {
  const { moveTask } = useContext(BoardContext)
  const [showMenu, setShowMenu] = useState(false)

  const handleMove = (newStatus) => {
    moveTask(task.id, newStatus)
    setShowMenu(false)
  }

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 dark:text-white">{task.title}</h3>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
        >
          ⋮
        </button>
      </div>

      {showMenu && (
        <div className="absolute bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-10 mt-2">
          <button
            onClick={() => onEdit(task)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="block w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400"
          >
            Delete
          </button>
        </div>
      )}

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{task.description}</p>
      <div className="flex justify-between items-center mb-3">
        <PriorityBadge priority={task.priority} />
        <span className="text-xs text-gray-500 dark:text-gray-400">{task.createdAt}</span>
      </div>

      <div className="flex gap-2">
        {task.status !== 'todo' && (
          <button
            onClick={() => handleMove('todo')}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-sm"
          >
            ← To Do
          </button>
        )}
        {task.status !== 'in_progress' && (
          <button
            onClick={() => handleMove('in_progress')}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded text-sm"
          >
            → In Progress
          </button>
        )}
        {task.status !== 'done' && (
          <button
            onClick={() => handleMove('done')}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded text-sm"
          >
            ✓ Done
          </button>
        )}
      </div>
    </div>
  )
}
