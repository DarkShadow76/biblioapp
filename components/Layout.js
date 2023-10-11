import React from "react";
import { Container } from 'react-bootstrap'

const Layout = (props) => {
  return <>
    <Container>
      {props.makeHeader()}
      {props.makeBody()}
    </Container>
  </>
}

export default Layout