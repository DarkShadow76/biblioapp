"use client"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <h1>Grupo 2</h1>
        <li>Abraham Silvera Mogollon</li>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page