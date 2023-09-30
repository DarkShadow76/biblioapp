import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../styles/custom.css'
//import Image from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="white">
      <Container className="container-nav" style={{ alignContent: "center" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '10rem' }} navbarScroll>
            <Navbar.Brand href="/" style={{ color: "black" }}>Biblio App</Navbar.Brand>
            <Nav.Link href="/" className="textColor" style={{ color: "black" }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: "black" }}>About</Nav.Link>
            <Nav.Link href="/actividades" className="nav-item active" style={{ color: "black" }}>Support
            </Nav.Link>
            <Nav.Link href="/configurar" style={{ color: "black" }}>Review
            </Nav.Link>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action3" >
                Acccion 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Accion 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Accion 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button href="/login/signin" style={{ alignContent: "right" }} variant="outline-primary">
          Sig Up
        </Button>{' '}
        <Button href="/login" style={{
          alignContent: "right",
          marginLeft: "1%"
        }} variant="outline-success">
          Log in
        </Button>{' '}
      </Container>
    </Navbar >
      <h2 style={{
        marginTop: "1%",
        textAlign: "center"
      }}>{props.titulo}</h2>
    </>
  );
}

export default Header