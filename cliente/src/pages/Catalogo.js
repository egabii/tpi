import { Row, Container, Col } from 'react-bootstrap';
import CardPropiedad  from '../components/CardPropiedad';
import propiedades from '../models/propiedades';
export default function Catalogo () {

  return (
    <Container>
      <Row>
        <Col md={12}>
          { propiedades.map(propiedad => <CardPropiedad key={propiedad.id} propiedad={propiedad} />) }
        </Col>
      </Row>
    </Container>
  );
}