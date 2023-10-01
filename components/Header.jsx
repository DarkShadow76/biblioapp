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
            <h5 style={{textAlign: "center"}}>{props.titulo}</h5>
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
    </>
  );
}

export default Header