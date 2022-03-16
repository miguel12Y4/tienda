import '@styles/globals.css'
import Layout from 'components/Layout.js'

function Application({ Component, pageProps }) {
  return  <Layout>
  <Component {...pageProps} />
  </Layout>
}

export default Application
