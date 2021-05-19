import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function FormUbicacion () {
  return (
    <div>
    <NuevaPropiedad/>
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
      <div className="btn-desplazo">
      <Link to= '/NuevaPropiedad/Propietario'><Button>Anterior</Button></Link>
      <Link to='/NuevaPropiedad/Descripcion'><Button>Siguiente</Button></Link>
      </div>
    </Form>
    </div>
  );
};

export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="ubicacion"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario" disabled>
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion">
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion" disabled>
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia" disabled>
      </Tab>
    </Tabs>
    </>
  );
}