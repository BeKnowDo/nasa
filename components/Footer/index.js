import logo from '@assets/images/logo.svg'
import React from 'react'

import { FooterSc } from './styles'

const Footer = () => {
  return (
    <FooterSc>
      <img src={logo} alt="LUMI's logo" />
      <h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="//lumiqualis.com"
          title="LumiQualis website"
        >
          LumiQualis, LLC
        </a>
      </h3>
    </FooterSc>
  )
}

export default Footer
