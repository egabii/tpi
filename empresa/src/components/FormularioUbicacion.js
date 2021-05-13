import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function FormUbicacion () {
  return (
    <Form>
      <Form.Row className="form-row">
        <Col md={3} className="my-1">
        <Form.Group controlId="pais">
          <Form.Label>Pais</Form.Label>
          <Form.Control type="text" placeholder="Argentina" />
        </Form.Group>
        </Col>
        <Col md={3} className="my-1">
        <Form.Group controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="Chaco" />
        </Form.Group>
        </Col>
        <Col md={3} className="my-1">
        <Form.Group controlId="codPostal">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="3500" />
        </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className="form-row">
        <Col md={3}>
        <Form.Group controlId="localidad">
          <Form.Label>Locaidad</Form.Label>
          <Form.Control type="text" placeholder="La Leonesa" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="barrio">
          <Form.Label>Barrio</Form.Label>
          <Form.Control type="text" placeholder="ejemploejemplo.com" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="direccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="ejemplo@ejemplo.com" />
        </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className="form-row">
        <Col md={3}>
        <Form.Group controlId="calle">
          <Form.Label>Calle</Form.Label>
          <Form.Control type="text" placeholder="Calle falsa 123" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="piso">
          <Form.Label>Piso</Form.Label>
          <Form.Control type="text" placeholder="9no" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="nroDepto">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" placeholder="9" />
        </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  );
};