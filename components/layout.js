import { useAuthContext } from '../contexts/auth'
import { signIn, signOut } from 'next-auth/client'

export default function Layout({ children }) {
  const { session } = useAuthContext()
  if (session) {
    return (
      <>
        <h2>Header: {session.user.name}</h2>
        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        {children}
      </>
    )
  } else {
    return (
      <div>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}
