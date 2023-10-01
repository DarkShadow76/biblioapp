"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Carrusel from "../../components/carrusel"
import { Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <Container>
          <Row>
            <Col sm={8}>sm=4</Col>
            <Col sm={4}>sm=8</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page