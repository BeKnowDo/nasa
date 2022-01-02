import navigationItems from '@data/navigation.json'
import { Layout } from '@layouts/Global'
import { colors } from '@styles/design-tokens'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import 'bulma/css/bulma.min.css'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Manrope', Roboto, sans-serif;
      background-color: ${colors.defaultPageBackgroundColor};

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps, navigationItems }) {
  // console.log(navigationItems)
  return (
    <>
      <GlobalStyle />
      <Layout navigationItems={navigationItems}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  // For when we integrate Strapi CMS
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  return { navigationItems: navigationItems }
}

export default MyApp
