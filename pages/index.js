import { useAuthContext } from '../contexts/auth'

export default function Home() {
  const { foo } = useAuthContext()
  return <div>Home page: {foo}</div>
}

Home.secure = false
