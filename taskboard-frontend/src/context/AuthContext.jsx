import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('taskboard_user', null)

  const login = (email, password) => {
    // Mock login - accept any email/password combination
    if (email && password) {
      const userData = { email, loginTime: new Date() }
      setUser(userData)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
