import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="" style={{fontSize:"40px" , textShadow:" 2px 2px 4px #000000" }}>TravelBliss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{fontSize:"25px" , color:"black"}}>Home</Nav.Link>
            <Nav.Link href="/destination" style={{fontSize:"25px" , color:"black" }}>Destination</Nav.Link>
            <Nav.Link href="/favorites" style={{fontSize:"25px" , color:"black" }}>Favorites</Nav.Link>
            <Nav.Link href="/about-us" style={{fontSize:"25px" , color:"black" }}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;





