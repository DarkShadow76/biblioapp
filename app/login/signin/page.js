"use client"
import { Container } from "react-bootstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import FormExample from "../../../components/formRegistro";

const Page = () => {

  return <Layout
    makeHeader={() => <Header titulo="Crear Cuenta" />}
    makeBody={
      () => <div>
        <Container style={{ width: "90%" }}>
          <FormExample/>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
};

export default Page;