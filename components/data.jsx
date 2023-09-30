import React from "react";
const os = require('os');

const empresa="App Biblioteca v1.0 © 2021-2023"

function getEmpresa() {
  return <>
    <strong>{empresa}</strong>
  </>
}

//export default getEmpresa

module.exports ={
  getEmpresa,
}