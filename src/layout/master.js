import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

// Grid configuration
const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
}

const Master = props => ({
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Grid fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            {this.props.children}
          </Row>
          <Row>
            <Footer />
          </Row>
        </Grid>
      </ThemeProvider>
    )
  }
})

export default Master
