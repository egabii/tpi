import { Row, Container, Col, Form, Button} from 'react-bootstrap';
import './homepage.css';
export default function Homepage(){

  return (
    <>
    <div className="bg-home-image">
      <section className="jumbotron text-center">
        <h1>Todos tenemos un sitio</h1>
        <p>Encuentra tu casa de alquiler o compra</p>
        <Form>
          <Form.Row className="align-items-center">
            <Col sm={12} className="my-1 justify-content-center">
              <Form.Check
                type="radio"
                className="mb-2 mr-sm-2"
                name="contrato"
                checked
                id="alquiler"
                label="Alquilar"
                value="alquiler"
              />
              <Form.Check
                type="radio"
                className="mb-2 mr-sm-2"
                name="contrato"
                id="comprar"
                label="Compra"
                value="comprar"
              />
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center">
            <Col sm={12} className="my-1 justify-content-center">
              <Form.Control as="select" custom aria-label="Tipo de inmueble" id="inmueble">
                <option>Departamento</option>
                <option>Casa</option>
                <option>Chalet</option>
                <option>Local</option>
                <option>Casa con Local</option>
                <option>Cabaña</option>
                <option>Cochera</option>
              </Form.Control>
              <Form.Control 
                id="ubicacion"
                as="input" 
                type="text" 
                custom 
                aria-label="Ubicacion" 
                placeholder="Localidad, Provincia, ..." 
              />
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </section>
    </div>
    <Container>
      <Row>
        <Col sm={12}>
          <h1>Home page</h1>
        </Col>
      </Row>
    </Container>
    </>

  )
}