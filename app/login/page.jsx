"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Card, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/custom.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Sistema de reserva de libros" />}
    makeBody={
      () => <div>
        <Container className="sm" style={{ width: "85%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button href="/configurar" style={{ display: "block", margin: "0 auto", width: "45%" }} variant="warning" type="submit">
              Log In
            </Button>
          </Form>
          <Button href style={{ marginTop: "2%", display: "block", margin: "0 auto", width: "45%" }} variant="primary">
            Crear Cuenta
          </Button>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page