import React from 'react'
import { FooterSc } from './styles'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <FooterSc>
      <img src={logo} alt="BKD's logo" />
      <h3>
        <a target='_blank' rel="noopener noreferrer" href='//lumiqualis.com' title='LumiQualis website'>
          LumiQualis, LLC
        </a>
      </h3>
    </FooterSc>
  )
}

export default Footer
