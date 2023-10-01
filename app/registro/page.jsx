"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button, Card, Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <Container>
          <h2>Hola Abraham</h2>
          <Card style={{ width: '90%', height: "90%" }}>
            <Row>
              <Col sm={4}>
                <Image style={{ display: "flex", marginTop: "5%", marginLeft: "5%", height: "60%", width: "90%" }} src="/images/books.jpg" fluid roundedCircle />
              </Col>
              <Col sm={8}>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Ingresar Nuevo Libro">
                    <div style={{ alignContent: "center", width: "90%" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="email" placeholder="Juan" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor/Autores</Form.Label>
                        <Form.Control type="email" placeholder="Peréz" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Serie Tipo</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Button style={{ marginBottom: "5%" }} variant="primary">Guardar</Button>{' '}
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page