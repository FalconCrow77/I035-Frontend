const DEFAULT_STATUS = 'todo'

const ACTIONS = {
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

export const boardReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, createTask(action.payload)],
      }

    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      }

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }

    case ACTIONS.MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.newStatus }
            : task
        ),
      }

    case ACTIONS.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    default:
      return state
  }
}
