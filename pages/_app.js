import { AuthWrapper } from '../contexts/auth'
import Layout from '../components/layout'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthWrapper>
  )
}

export default App
