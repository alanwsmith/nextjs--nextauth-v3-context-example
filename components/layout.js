import { useAuthContext } from '../contexts/auth'
import { signIn, signOut } from 'next-auth/client'
import Link from 'next/link'

export default function Layout({ children }) {
  const { session } = useAuthContext()

  if (session) {
    return (
      <>
        <div>
          <div>
            Logged in as: {session.user.name} -{' '}
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          <TheLinks />
          {children}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          Not logged in - <button onClick={() => signIn()}>Sign In</button>
        </div>
        <TheLinks />
        {children}
      </>
    )
  }
}

function TheLinks() {
  return (
    <>
      <hr />
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>{' '}
        ~{' '}
        <Link href="/unprotected-page">
          <a>Unprotected Page</a>
        </Link>{' '}
        ~{' '}
        <Link href="/protected-page">
          <a>Protected Page</a>
        </Link>{' '}
        ~{' '}
        <Link href="/api/unprotected-api">
          <a>Unprotected API Route</a>
        </Link>{' '}
        ~{' '}
        <Link href="/api/protected-api">
          <a>Protected API Route</a>
        </Link>
      </div>
      <hr />
    </>
  )
}
