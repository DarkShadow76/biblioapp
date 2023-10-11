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
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Page = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <Container>
          <h2>Hola User</h2>
          <Card style={{ width: '90%', height: "90%" }}>
            <Row>
              <Col sm={4}>
                <Image className="imagen-perfil" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZSUyMGxhJTIwYmlibGlvdGVjYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" fluid thumbnail />
              </Col>
              <Col sm={8}>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Insertar Nuevo Libro">
                    <div style={{ alignContent: "center", width: "90%" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor/res</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Serie.Tipo</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Button variant="primary" onClick={handleShow}>
                        Guardar
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Registro Completo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>El recurso fue grabado con exito</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            ok
                          </Button>
                        </Modal.Footer>
                      </Modal>
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