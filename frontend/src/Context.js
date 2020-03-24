import React, { useState, createContext } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [username, setUsername] = useState(() => window.sessionStorage.getItem('username'))
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))

  const value = {
    isAuth,
    username,
    activateAuth: (token, username) => {
      setUsername(username)
      setIsAuth(true)
      window.sessionStorage.setItem('username', username)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setUsername(undefined) 
      setIsAuth(false)
      window.sessionStorage.removeItem('username')
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
