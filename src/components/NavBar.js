import React from 'react'
import background from '../images/bg.png'
import './NavBar.css'
import { Nav, Navbar, Container } from 'react-bootstrap'

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="background-img"><img src={background} alt="" className="bg-img"/></div>
        <Navbar variant="dark" expand="lg" className="navbar" fixed="top">
            <Container>
                <Navbar.Brand href="https://github.com/ananyaraju" target="_blank" rel="noreferrer" style={{color: 'white', fontFamily: 'Vidaloka'}}>
                  AnanyaRaju
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav style={{marginLeft: 'auto', fontFamily: 'quicksand'}}>
                    <Nav.Link href="#" style={{color: 'white'}}>About</Nav.Link>
                    <Nav.Link href="#" style={{color: 'white'}}>Contact</Nav.Link>
                    <Nav.Link href="#" style={{color: 'white'}}>Projects</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default NavBar
