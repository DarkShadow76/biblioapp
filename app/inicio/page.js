"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Administracion de bibliotecas"/>}
    makeBody={
      () => <div>
        <h1>Grupo 2</h1>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page