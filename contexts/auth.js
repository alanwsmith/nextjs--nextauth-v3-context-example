import { createContext, useContext } from 'react'
import { useSession, signIn } from 'next-auth/client'
import { useEffect } from 'react'

const AuthContext = createContext()

export function AuthWrapper({ children, securePage }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user

  let authData = { foo: 'bar' }

  useEffect(() => {
    console.log(`Session: ${session}`)
    console.log(`Loading: ${loading}`)
    if (loading) return
    if (session === null && loading === false && securePage) {
      signIn()
    }
  }, [session, loading, securePage])

  if (session === null && loading === false && securePage) {
    return null
  }

  if (session !== undefined && loading === false) {
    return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    )
  }

  return null
}

export function useAuthContext() {
  return useContext(AuthContext)
}
