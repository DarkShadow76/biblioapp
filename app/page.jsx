"use client"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carrusel from "../components/carrusel"
import { Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <h1>Grupo #</h1>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page