import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

export const Header = ({ onOpenModal }) => {
  const { user, logout } = useContext(AuthContext)
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="bg-blue-600 dark:bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">📋 TaskBoard</h1>
          <p className="text-sm text-blue-100">Kanban Task Manager</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition"
          >
            + New Task
          </button>

          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
            title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <div className="border-l border-blue-400 pl-4">
            <p className="text-sm">Welcome, {user?.email}</p>
            <button
              onClick={logout}
              className="text-blue-100 hover:text-white text-sm mt-1"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
