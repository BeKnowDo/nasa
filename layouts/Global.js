import { Footer } from '@components/Footer'
import { Navigation } from '@components/Nav'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 80px;
`

export const Layout = ({ children, navigationItems }) => {
  const [chat, setChat] = useState(false)

  useEffect(() => {
    setChat(true)
  }, [])
  return (
    <Container className="container">
      <Navigation navigationItems={navigationItems} />

      {children}

      <Footer />
    </Container>
  )
}
