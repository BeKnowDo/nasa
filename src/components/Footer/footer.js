import React from 'react'
import { FooterSc } from './styles'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <FooterSc>
      <img src={logo} />
      <h3>BKD Digital, Inc. - Veteran owned and Operated</h3>
    </FooterSc>
  )
}

export default Footer
