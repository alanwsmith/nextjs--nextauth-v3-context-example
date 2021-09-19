import { useAuthContext } from '../contexts/auth'

export default function Layout({ children }) {
  const { foo } = useAuthContext()
  return (
    <>
      <h2>Header: {foo}</h2>
      {children}
    </>
  )
}
