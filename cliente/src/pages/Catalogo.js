import { Row, Container, Col } from 'react-bootstrap';
import CardPropiedad from '../components/CardPropiedad';
import FilterPropiedades from '../components/FilterPropiedades';
import propiedades from '../models/propiedades';
export default function Catalogo() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
         <FilterPropiedades />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {propiedades.map(propiedad => <CardPropiedad key={propiedad.id} propiedad={propiedad} horizontal />)}
        </Col>
      </Row>
    </Container >
  );
}