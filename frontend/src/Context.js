import React, { useState, createContext } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))
  const [serversSocket, setServersSocket] = useState()

  const value = {
    isAuth,
    serversSocket,
    setServersSocket,
    activateAuth: token => setIsAuth(token),
    removeAuth: () => {
      setIsAuth(false)
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
