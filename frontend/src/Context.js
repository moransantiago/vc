import React, { useState, createContext, useRef } from 'react'

import { useRTCSocket } from './hooks/useRTCSocket'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))
  const RTC = useRef(useRTCSocket())
  const [serversSocket, setServersSocket] = useState()

  const value = {
    isAuth,
    RTC: RTC.current,
    setRTC: socket => RTC.current = socket,
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
