import { AuthWrapper } from '../contexts/auth'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
}

export default App
