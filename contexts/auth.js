import { createContext, useContext } from 'react'
import { useSession, signIn } from 'next-auth/client'
import { useEffect } from 'react'

const AuthContext = createContext()

export function AuthWrapper({ children, securePage }) {
  const [session, loading] = useSession()
  let authData = {}

  useEffect(() => {
    if (loading) return
    // This kicks over to sign in automatically if the page
    // is flagged to be secure and the user isn't logged in
    if (session === null && loading === false && securePage) {
      signIn()
    }
  }, [session, loading, securePage])

  // This looks like a duplicate, but it's needed to prevent
  // the flash of unauthenticated content
  if (session === null && loading === false && securePage) {
    return null
  }

  if (session !== undefined && loading === false) {
    authData.session = session
    return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    )
  }

  // return null while it's still working. Could
  // set this and the other nulls up to return a backgroun
  // color that matches the content for a little nicer experience
  return null
}

export function useAuthContext() {
  return useContext(AuthContext)
}
