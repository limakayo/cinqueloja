import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Content extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">cinque admin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/admin/pecas">Peças</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin/modelos">Modelos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin/estampas">Estampas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin/tamanhos">Tamanhos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="main">
          {children}
        </div>
      </div>
    )
  }
}

export default Content
