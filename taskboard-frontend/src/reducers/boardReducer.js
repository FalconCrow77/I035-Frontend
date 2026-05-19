const DEFAULT_STATUS = 'todo'

export const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  MOVE_TASK: 'MOVE_TASK',
  SET_TASKS: 'SET_TASKS',
}

const createTask = (payload) => ({
  id: Date.now(),
  title: payload.title,
  description: payload.description,
  priority: payload.priority,
  status: payload.status || DEFAULT_STATUS,
  createdAt: new Date().toLocaleDateString(),
})

const findTaskById = (tasks, id) => tasks.findIndex(task => task.id === id)

const handleAddTask = (state, payload) => ({
  ...state,
  tasks: [...state.tasks, createTask(payload)],
})

const handleUpdateTask = (state, payload) => ({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === payload.id ? { ...task, ...payload } : task
  ),
})

const handleDeleteTask = (state, taskId) => ({
  ...state,
  tasks: state.tasks.filter(task => task.id !== taskId),
})

const handleMoveTask = (state, payload) => ({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === payload.id
      ? { ...task, status: payload.newStatus }
      : task
  ),
})

const handleSetTasks = (state, payload) => ({
  ...state,
  tasks: payload,
})

const handlers = {
  [ACTIONS.ADD_TASK]: handleAddTask,
  [ACTIONS.UPDATE_TASK]: handleUpdateTask,
  [ACTIONS.DELETE_TASK]: handleDeleteTask,
  [ACTIONS.MOVE_TASK]: handleMoveTask,
  [ACTIONS.SET_TASKS]: handleSetTasks,
}

export const boardReducer = (state, action) => {
  const handler = handlers[action.type]
  return handler ? handler(state, action.payload) : state
}
