import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { HeaderSc } from './styles'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  onClose = () => {

  }

  render () {
    const { menuOpen } = this.state

    return (
      <HeaderSc>
        <AppBar position='static'>
          <ClickAwayListener onClickAway={this.handleClose}>
            <MenuList>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </AppBar>
      </HeaderSc>
    )
  }
}

export default Header
