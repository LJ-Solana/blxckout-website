import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.png'

export const Header = () => {
  return (
    <div className='headerbar centerContent'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="missing" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Ecosystem</Nav.Link>
              <Nav.Link href="#home">NFT</Nav.Link>
              <Nav.Link href="#home">Adopt</Nav.Link>
              <Nav.Link href="#link" className='wallet'>Connect wallet</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
