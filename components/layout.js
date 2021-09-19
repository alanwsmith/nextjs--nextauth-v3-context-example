import { useAuthContext } from '../contexts/auth'
import { signIn, signOut } from 'next-auth/client'
import Link from 'react'

export default function Layout({ children }) {
  const { session } = useAuthContext()
  if (session) {
    return (
      <>
        <div>
          <div>
            Logged in as: {session.user.name} -{' '}
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <hr />
          {children}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          Not logged in - <button onClick={() => signIn()}>Sign in</button>
        </div>
        <hr />
        {children}
      </>
    )
  }
}
