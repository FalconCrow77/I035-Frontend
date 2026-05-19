import React, { createContext, useReducer } from 'react'
import { boardReducer } from '../reducers/boardReducer'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const BoardContext = createContext()

const initialState = {
  tasks: [],
}

export const BoardProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage('taskboard_tasks', [])

  const [state, dispatch] = useReducer(boardReducer, {
    ...initialState,
    tasks: storedTasks,
  })

  const addTask = (title, description, priority) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { title, description, priority, status: 'todo' },
    })
    setStoredTasks([...state.tasks])
  }

  const updateTask = (id, updates) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: { id, ...updates },
    })
    setStoredTasks(state.tasks)
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    })
    setStoredTasks(state.tasks)
  }

  const moveTask = (id, newStatus) => {
    dispatch({
      type: 'MOVE_TASK',
      payload: { id, newStatus },
    })
    setStoredTasks(state.tasks)
  }

  return (
    <BoardContext.Provider value={{ state, addTask, updateTask, deleteTask, moveTask }}>
      {children}
    </BoardContext.Provider>
  )
}
