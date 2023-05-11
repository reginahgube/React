import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="bg-secondary-subtle" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://thediamondbox.co.za/wp-content/uploads/2022/08/diamond-box.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact ">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/collection">Collection</Nav.Link>
            <Nav.Link href="/sale">Sale</Nav.Link>
            <Nav.Link href="/jewellery">Jewellery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
}

export default Header;