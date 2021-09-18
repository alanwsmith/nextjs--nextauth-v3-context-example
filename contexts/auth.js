import { createContext, useContext } from 'react'

const AuthContext = createContext()

export function AuthWrapper({ children }) {
  let authData = { foo: 'bar' }

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
