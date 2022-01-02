import React, { Component } from 'react'

import Navigation from '../Navigation'

import { HeaderSc } from './styles'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  handleToggle() {
    this.setState((state) => ({ open: !state.open }))
  }

  onClose() {}

  render() {
    const { menuOpen } = this.state

    return (
      <HeaderSc>
        <Navigation {...menuOpen} />
      </HeaderSc>
    )
  }
}

export default Header
