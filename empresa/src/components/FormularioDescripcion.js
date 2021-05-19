
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import "./style.css";

export default function FormDescripcion () {
  let history=useHistory();
  function handleClick(){
    history.push("/NuevaPropiedad/Descripcion")
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      handleClick()
    }
    setValidated(true);
  };
  return (
    <div>
      <NuevaPropiedad/>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-centro">
        <Form.Row className="form-row">
          <Col md={8}>
            <Col md={4}>
            <Form.Group controlId="TitPropiedad">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group controlId="email">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="$" required/>
            </Form.Group>
            </Col>
          </Col>
        </Form.Row>
        <Form.Row className="form-row">
          <Col sm={1}>
          <Form.Group controlId="dniCliente">
            <Form.Label>Dormitorios</Form.Label>
            <Form.Control type="number" min="0" max="20" placeholder="33091229" required/>
          </Form.Group>
          </Col>
          <Col sm={3}>
          <Form.Group controlId="email">
            <Form.Label>Artefactos</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="direccion">
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select" defaultValue="Elegir" required>
              <option>Departamento</option>
              <option>Casa</option>
              <option>Chalet</option>
              <option>Local</option>
              <option>Casa con local</option>
              <option>Cabaña</option>
              <option>Cochera</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="tipoContrato">
              <Form.Label>Tipo de Contrato</Form.Label>
              <Form.Control as="select" required>
                <option>Venta</option>
                <option>Alquiler</option>
              </Form.Control>
          </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row >
        <Col md={6}>
          <Form.Group controlId="Descripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          </Col>
        </Form.Row>
        
        <div className="btn-desplazo">
          <Link to= '/NuevaPropiedad/Ubicacion'><Button>Anterior</Button></Link>
          <Button type='submit'>Siguiente</Button>
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
    <Tabs defaultActiveKey="descripcion"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario" disabled>
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion" disabled>
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia" disabled>
      </Tab>
    </Tabs>
    </>
  );
}