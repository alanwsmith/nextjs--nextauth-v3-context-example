import { useAuthContext } from '../contexts/auth'

export default function Home() {
  const { session } = useAuthContext()
  return (
    <>
      <p>
        This is the home page. You can see it regardless of if you&apos;re
        logged in or not. If you are logged in, you&apos;ll see a Sign Out
        button. If you&apos;re not logged in, you&apos;ll see a Sign In button
      </p>
      <p>
        Here is an example of using data from the session in the home page
        component. The current session user is:{' '}
        {session === null ? 'null' : session.user.name}
      </p>
    </>
  )
}

Home.secure = false
