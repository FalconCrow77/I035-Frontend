export const boardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload.title,
            description: action.payload.description,
            priority: action.payload.priority,
            status: action.payload.status || 'todo',
            createdAt: new Date().toLocaleDateString(),
          },
        ],
      }

    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }

    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.newStatus }
            : task
        ),
      }

    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      }

    default:
      return state
  }
}
