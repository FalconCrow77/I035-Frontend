import { useState, useContext } from 'react'
import { Header } from '../components/Header'
import { Column } from '../components/Column'
import { Modal } from '../components/Modal'
import { BoardContext } from '../context/BoardContext'

export const BoardPage = () => {
  const { state, addTask, updateTask, deleteTask } = useContext(BoardContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [filterPriority, setFilterPriority] = useState('all')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)

  const filteredTasks = filterPriority === 'all'
    ? state.tasks
    : state.tasks.filter((task) => task.priority === filterPriority)

  const todoTasks = filteredTasks.filter((task) => task.status === 'todo')
  const inProgressTasks = filteredTasks.filter((task) => task.status === 'in_progress')
  const doneTasks = filteredTasks.filter((task) => task.status === 'done')

  const handleOpenModal = () => {
    setEditingTask(null)
    setIsModalOpen(true)
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  const handleModalSubmit = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData)
    } else {
      addTask(formData.title, formData.description, formData.priority)
    }
    setIsModalOpen(false)
    setEditingTask(null)
  }

  const handleDeleteTask = (taskId) => {
    if (showDeleteConfirm === taskId) {
      deleteTask(taskId)
      setShowDeleteConfirm(null)
    } else {
      setShowDeleteConfirm(taskId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onOpenModal={handleOpenModal} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary */}
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            📊 {todoTasks.length} To Do · {inProgressTasks.length} In Progress · {doneTasks.length} Done
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6 flex gap-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">Filter by Priority:</label>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column
            title="To Do"
            status="todo"
            tasks={todoTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            taskCount={todoTasks.length}
          />
          <Column
            title="In Progress"
            status="in_progress"
            tasks={inProgressTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            taskCount={inProgressTasks.length}
          />
          <Column
            title="Done"
            status="done"
            tasks={doneTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            taskCount={doneTasks.length}
          />
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingTask(null)
        }}
        onSubmit={handleModalSubmit}
        task={editingTask}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      />

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Confirm Delete
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete this task? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDeleteTask(showDeleteConfirm)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
