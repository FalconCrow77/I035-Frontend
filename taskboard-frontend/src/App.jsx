import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { BoardProvider } from './context/BoardContext'
import { PrivateRoute } from './components/PrivateRoute'
import { LoginPage } from './pages/LoginPage'
import { BoardPage } from './pages/BoardPage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <BoardProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/board"
                element={
                  <PrivateRoute>
                    <BoardPage />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/board" replace />} />
            </Routes>
          </BoardProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
