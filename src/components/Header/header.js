import React, { Component } from 'react'
import { HeaderSc } from './styles'
import Navigation from '../Navigation'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  handleToggle () {
    this.setState(state => ({ open: !state.open }))
  };

  onClose () {};

  render () {
    const { menuOpen } = this.state

    return (
      <HeaderSc sticky>
        <Navigation {...menuOpen} />
      </HeaderSc>
    )
  }
}

export default Header
