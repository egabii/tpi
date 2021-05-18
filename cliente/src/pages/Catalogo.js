import { Row, Container, Col } from 'react-bootstrap';
import CardPropiedad from '../components/CardPropiedad';
import FilterPropiedades from '../components/FilterPropiedades';
import propiedades from '../models/propiedades';
import './catalogo.css';

export default function Catalogo() {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <FilterPropiedades />
        </Col>
        <Col md={9}>
          {propiedades.map(propiedad => <CardPropiedad key={propiedad.id} propiedad={propiedad} horizontal />)}
        </Col>
      </Row>
    </Container >
  );
}