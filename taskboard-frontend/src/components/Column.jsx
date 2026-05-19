import { TaskCard } from './TaskCard'

export const Column = ({ title, status, tasks, onEdit, onDelete, taskCount }) => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 min-h-96">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{taskCount} tasks</p>
      </div>
      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  )
}
