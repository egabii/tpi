import { Col, Form, Button } from 'react-bootstrap';

export default function FilterPropiedades() {
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={12} className="my-1  justify-content-center">
          <div className="form-group-center">
              <Form.Control
                className="form-group-item"
                id="ubicacion"
                as="input"
                type="text"
                custom
                aria-label="Ubicacion"
                placeholder="Localidad, Provincia, ..."
              />
            <Form.Control className="form-group-item" as="select" custom aria-label="Tipo de vivienda" id="vivienda">
              <option>Departamento</option>
              <option>Casa</option>
              <option>Chalet</option>
              <option>Local</option>
              <option>Casa con Local</option>
              <option>Cabaña</option>
              <option>Cochera</option>
            </Form.Control>
            <Form.Control className="form-group-item" as="select" custom aria-label="Precio" id="precio" placeholder="Precio">
              <option>$15.000 - $20.000</option>
              <option>$21.000 - $30.000</option>
              <option>$31.000 - $40.000</option>
              <option>$41.000 - $50.000</option>
              <option>$51.000 - $60.000</option>
              <option>mas de $100.000</option>
            </Form.Control>
            <Form.Control className="form-group-item" as="select" custom aria-label="Habitaciones" id="habicationes" placeholder="Habitaciones">
              <option>Todo</option>
              <option>+1</option>
              <option>+2</option>
              <option>+3</option>
            </Form.Control>
            <Form.Control className="form-group-item" as="select" custom aria-label="Baño" id="banio" placeholder="Baños">
              <option>Todo</option>
              <option>+1</option>
              <option>+2</option>
              <option>+3</option>
            </Form.Control>
            <Button variant="primary" type="submit" className="domus-btn">Buscar</Button>
          </div>
        </Col>
      </Form.Row>
    </Form>
  )
}