"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Card, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/custom.css'

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Sistema de reserva de libros" />}
    makeBody={
      () => <div>
        <Container style={{ width: "85%" }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title style={{ alignContent: "center" }}></Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Por ser uno de los primeros Early Adopters te ganaste un lugar en nuestros corazones
                    </Form.Text>
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
              </Card.Text>
              <Button href style={{ display: "block", margin: "0 auto", width: "45%" }} variant="primary">
                Crear Cuenta
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page