import React from "react";
import { Container } from "react-bootstrap";
const getEmpresa = require("./data.jsx")
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return <div fixed="bottom" className="container-footer">
    <h6>{getEmpresa.getEmpresa()}</h6>
  </div>
}

export default Footer