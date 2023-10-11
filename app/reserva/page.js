"use client"
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./../../styles/custom.css"
import { useEffect } from "react"
import { libros_reservados, libros_vencer } from '../../components/libros.js';

const Page = () => {

  const httpObtenerProducto = async () => {
    const resp = await fetch('../../test_data.js')
    const data = await resp.json()
    console.log(data)
    setListaLibros(data)
  }

  useEffect(() => {
    httpObtenerProducto()
  }, [])

  return <Layout

    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <Card className='card'>
          <Row className="custom-row">
            <h1>Bienvenido Abraham</h1>
            <h2>Ultimas reservas</h2>
            <Col>
              <Row xs={1} md={3} className="g-4">
                {libros_reservados.map((libro) => (
                  <Col key={libro.id}>
                    <Card className='card'>
                      <Card.Body>
                        <Image className="imagen-libro" src={libro.image} thumbnail />
                        <Card.Title>{libro.titulo}</Card.Title>
                        <Card.Text>
                          <h6>{libro.autor}</h6>
                          <h6>{libro.serie}</h6>
                          <h6>{libro.isbn}</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className='card'>
          <Row className="custom-row">
            <h2>Proximas a vencer</h2>
            <Col>
              <Row xs={1} md={3} className="g-4">
                {libros_vencer.map((libro) => (
                  <Col key={libro.id}>
                    <Card>
                      <Image style={{ display: "flex", marginTop: "5%", marginLeft: "5%", height: "90%", width: "90%" }} src={libro.image} thumbnail />
                      <Card.Body>
                        <Card.Title>{libro.titulo}</Card.Title>
                        <Card.Text>
                          <h6>{libro.autor}</h6>
                          <h6>{libro.serie}</h6>
                          <h6>{libro.isbn}</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page