import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormRegistro() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    tipo_documento: '',
    n_documento: '',
    email: '',
    contrasenia: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTipoDocumentoChange = (event) => {
    const selectedTipoDocumento = event.target.value;
    setFormData({ ...formData, tipo_documento: selectedTipoDocumento });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Store the form data in local storage
      localStorage.setItem('formData', JSON.stringify(formData));
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
            <Form.Control
              type="text"
              placeholder="Juan"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Peréz"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Select
            name="tipo_documento"
            aria-label="Tipo de Documento"
            value={formData.tipo_documento}
            onChange={handleTipoDocumentoChange}
          >
            <option>Tipo de Documento</option>
            <option value="1">DNI</option>
            <option value="2">Licencia de Conducir</option>
            <option value="3">Carné de extranjeria</option>
            <option value="4">Pasaporte</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero de Documento</Form.Label>
            <Form.Control
              type="text"
              name="n_documento"
              placeholder="777"
              value={formData.n_documento}
              onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <h5>Datos de Cuenta</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="contrasenia"
              placeholder="Password"
              value={formData.contrasenia}
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ingrese Password nuevamente</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type='submit' variant="primary">Registrar</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormRegistro;