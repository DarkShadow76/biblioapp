"use client"
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
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
          <h2>Hola User</h2>
          <Card style={{ width: '90%', height: "90%" }}>
            <Row>
              <Col sm={4}>
                <Image className="imagen-perfil" src="/images/thispersondoesnotexist.jpg" fluid roundedCircle />
              </Col>
              <Col sm={8}>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Datos Personales">
                    <div style={{ alignContent: "center", width: "90%" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="email" placeholder="Juan" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="email" placeholder="Peréz" />
                      </Form.Group>
                      <Form.Select aria-label="Default select example">
                        <option>Tipo de Documento</option>
                        <option value="1">DNI</option>
                        <option value="2">Carnet Extrangeria</option>
                        <option value="3">En tramite</option>
                      </Form.Select>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nomero de Documento</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Button style={{ marginBottom: "5%" }} variant="primary">Guardar</Button>{' '}
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Cuenta">
                    <div style={{ alignContent: "center", width: "90%" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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