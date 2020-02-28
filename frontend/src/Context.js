import React, { useState, createContext } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))
  const [username, setUsername] = useState('admin')

  const value = {
    isAuth,
    username,
    activateAuth: (token, username) => {
      setIsAuth(true)
      setUsername(username)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      setUsername(null)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
