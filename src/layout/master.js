import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const Master = props => ({
  render () {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {this.props.children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    )
  }
})

export default withStyles(styles)(Master)
