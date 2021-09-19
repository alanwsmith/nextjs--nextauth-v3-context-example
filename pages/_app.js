import { AuthWrapper } from '../contexts/auth'
import Layout from '../components/layout'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  const securePage = Component.secure !== undefined ? Component.secure : true
  return (
    <AuthWrapper securePage={securePage}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthWrapper>
  )
}

export default App
