import React from "react";
import { Container } from "react-bootstrap";
const getEmpresa = require("./data.jsx")
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return <div fixed="bottom" className="container-footer">
    <h6>{getEmpresa.getEmpresa()}</h6>
    <Container>
      <a href="https://www.youtube.com/watch?v=yPYZpwSpKmA">
        <Image style={{ width: "3%", height: "3%" }} src="https://pic.onlinewebfonts.com/thumbnails/icons_24838.svg" circleRounded />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <Image style={{ width: "3.5%", height: "3.5%" }} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dlf.pt%2Fpng%2Fbig%2F29%2F291915_instagram-white-png.png&f=1&nofb=1&ipt=9d72f672c1f244ced99c543af25590a820b3bcf8c743dd9407a6b10d882d525d&ipo=images" circleRounded />
      </a>
      <a href="https://www.youtube.com/watch?v=OTePvoLKp60">
        <Image style={{ width: "2.7%", height: "2.7%" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2F1553127754.png&f=1&nofb=1&ipt=e3662b442822e85bfa6f025bba50bed610fc8b3c08d11116aa0adb93109a4055&ipo=images" circleRounded />
      </a>
    </Container>
  </div>
}

export default Footer