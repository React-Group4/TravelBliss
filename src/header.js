import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import logo from './logo3.png';



function Header() {
  return (
  
    <Navbar expand="lg" className="co" >
      <Container className='co'>
        <Navbar.Brand href="#home" style={{fontSize:"60px" ,marginRight:"50px", textShadow:" 2px 2px 4px #000000" , color:"white"}}>
        <img src={logo} alt="Logo" width="150px" height="80px"/> TravelBliss </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{fontSize:"25px" , color:"black" , color:"white"}} className='st'> ⌂ Home</Nav.Link>
            <Nav.Link href="/destination" style={{fontSize:"25px" , color:"black" , color:"white" }} className='st'> ⌖ Destination</Nav.Link>
            <Nav.Link href="/favorites" style={{fontSize:"25px" , color:"black" , color:"white"}} className='st'> ♡ Favorites</Nav.Link>
            <Nav.Link href="/about-us" style={{fontSize:"25px" , color:"black" , color:"white"}} className='st'> ✆ About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;





