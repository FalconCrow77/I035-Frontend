# TaskBoard - Kanban Task Manager

A full-featured Kanban-style task management web application built with React, Vite, Tailwind CSS, and React Router. Create, read, update, and delete tasks across three columns (To Do, In Progress, Done) with persistent storage and dark mode support.

## 🎯 Features

✅ **Authentication**
- Mock login/logout system
- Session persistence
- Protected routes

✅ **Task Management (CRUD)**
- Create tasks with title, description, and priority
- Read tasks organized in a Kanban board
- Update task details and status
- Delete tasks with confirmation

✅ **Board Features**
- 3-column Kanban board (To Do, In Progress, Done)
- Task count summary
- Priority badges (Low, Medium, High)
- Task filtering by priority
- Drag-and-drop task movement (via buttons)

✅ **UI/UX**
- Dark mode toggle
- Responsive design (mobile & desktop)
- Tailwind CSS styling
- Smooth transitions

✅ **Data Persistence**
- localStorage integration
- Tasks survive page refresh
- Theme preference saved
- Authentication session preserved

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Context API + useReducer
- **Persistence**: localStorage with custom hooks
- **Deployment**: Vercel

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── TaskCard.jsx
│   ├── Column.jsx
│   ├── Modal.jsx
│   ├── PriorityBadge.jsx
│   └── PrivateRoute.jsx
├── pages/              # Route-level pages
│   ├── LoginPage.jsx
│   └── BoardPage.jsx
├── context/            # Context API setup
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── BoardContext.jsx
├── hooks/              # Custom hooks
│   └── useLocalStorage.js
├── reducers/           # Redux-like reducers
│   └── boardReducer.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/taskboard-frontend.git
cd taskboard-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🔐 Authentication

The login page uses **mock authentication** (for demo purposes):
- **Email**: Any valid email format
- **Password**: Any non-empty password

Example: `demo@example.com` / `password123`

## 📱 Usage

1. **Login**: Enter any email and password on the login page
2. **Create Task**: Click "+ New Task" in the header
3. **Edit Task**: Click the menu (⋮) on a task card and select "Edit"
4. **Move Task**: Use the colored buttons on task cards to move between columns
5. **Delete Task**: Click the menu (⋮) on a task card and select "Delete"
6. **Filter**: Use the priority filter dropdown to filter tasks
7. **Dark Mode**: Click the 🌙 button in the header
8. **Logout**: Click the "Logout" button in the top right

## 🎨 Dark Mode

The application supports system dark mode preference and manual toggle. Your preference is saved in localStorage.

## 💾 Data Storage

All data is stored in the browser's localStorage:
- `taskboard_tasks` - Task list
- `taskboard_user` - Authentication session
- `taskboard_theme` - Dark mode preference

**Note**: Data is stored locally and will be lost if browser data is cleared.

## 🔄 State Management

- **AuthContext**: Manages user authentication state
- **ThemeContext**: Manages dark mode preference
- **BoardContext**: Manages task board state with useReducer
- **useLocalStorage Hook**: Custom hook for persistent storage

## ✨ Git Workflow

The project includes meaningful commits following best practices:

```
Initial project setup with Vite + React
Configure Tailwind CSS and styling
Create context API for authentication
Create context API for theme management
Implement board reducer and context
Add reusable UI components
Create login page with authentication
Create board page with CRUD operations
Add dark mode toggle and persistence
Final: Ready for deployment
```

## 🌐 Deployment

This application is deployed on **Vercel** at:
[Live URL will be added after deployment]

### Deploy to Vercel

1. Push your repository to GitHub
2. Connect your GitHub repo to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

## 📸 Screenshot

[Screenshot placeholder - Add after deployment]

## 📋 Features Checklist

- [x] User Authentication (Mock)
- [x] CRUD Operations for Tasks
- [x] 3-Column Kanban Board
- [x] Task Filtering by Priority
- [x] Dark Mode Toggle
- [x] Responsive Design
- [x] localStorage Persistence
- [x] React Router Navigation
- [x] Context API State Management
- [x] useReducer Pattern
- [x] Custom Hooks
- [x] Tailwind CSS Styling

## 🤝 Contributing

This is a course project. For any improvements or bug reports, please open an issue.

## 📄 License

This project is part of the React JS course by Golam Mahmood.

## ✉️ Support

For questions or issues, reach out to the course instructor or project maintainer.

---

**Course**: React JS  
**Instructor**: Golam Mahmood  
**Project Type**: Individual  
**Last Updated**: May 2026
