import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormRegistro() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center" }}>Sistema de Reserva  de Libros</h3>
      <h4 style={{ textAlign: "center", marginBottom: "4%" }}>Registro de Usuario</h4>
      <Row>
        <Col xs={6}>
          <h5>Datos Personales</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="email" placeholder="Juan" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="email" placeholder="Peréz" />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Tipo de Documento</option>
            <option value="1">DNI</option>
            <option value="2">Carnet Extrangeria</option>
            <option value="3">En tramite</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nomero de Documento</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <h5>Datos de Cuenta</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ingrese Password nuevamente</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary">Registrar</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormRegistro;