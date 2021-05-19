
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function FormPropietario () {
  
  return (
    <div>
    <NuevaPropiedad/>
    <Form>
      <Form.Row className="form-row">
        <Col md={3} className="my-1">
        <Form.Group controlId="nroCliente">
          <Form.Label>Nro de Cliente</Form.Label>
          <Form.Control type="text" placeholder="Numero de cliente" />
        </Form.Group>
        </Col>
        <Col md={3} className="my-1">
        <Form.Group controlId="TipoCliente">
          <Form.Label>Tipo de Cliente</Form.Label>
          <Form.Control as="select">
            <option>Corporativo</option>
            <option>Particular</option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col md={3} className="my-1">
        <Form.Group controlId="nombreCompleto">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="text" placeholder="nombre completo" />
        </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className="form-row">
        <Col md={3}>
        <Form.Group controlId="dniCliente">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="33091229" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="email">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="direccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="ejemplo@ejemplo.com" />
        </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className='form-row-start'>
        <Col md={3}>
          <Form.Group controlId="tipoContrato">
            <Form.Label>Tipo de Contrato</Form.Label>
            <Form.Control as="select">
              <option>Venta</option>
              <option>Alquiler</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Link to='/NuevaPropiedad/Ubicacion'><Button>Siguiente</Button></Link>
    </Form>
    </div>


  );
};
export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="propietario"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario">
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion">
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia">
      </Tab>
    </Tabs>
    </>
  );
}