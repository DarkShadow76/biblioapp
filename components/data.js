import React from "react";

const empresa="App Biblioteca v1.0 © 2023-II"

function getEmpresa() {
  return <>
    <strong>{empresa}</strong>
  </>
}

module.exports ={
  getEmpresa,
}