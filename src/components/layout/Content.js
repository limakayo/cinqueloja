import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
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
        <Navbar light expand="md">
          <NavbarBrand tag={Link} to="/">cinque</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/vestidos">Vestidos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">Buscar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">Perfil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="">Sacola</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="main">
          {children}
        </div>
        <footer className="footer bg-light">
          <Container>
            <Row>
              <Col>cinque</Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default Content
