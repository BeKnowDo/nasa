import { Layout } from '@layouts/global'
import { injectGlobal } from '@emotion/css'
import { colors } from '@styles/design-tokens'

injectGlobal`
  body {
    font-family: 'PT Sans Narrow', sans-serif;
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
  img { max-width: 100%; }
`

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
