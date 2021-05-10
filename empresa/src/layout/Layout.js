import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {

  return ( 
    <Container fluid="md">
      <Row>
        <Col md={2}>
          <h1>Barra de navegacion</h1>
          <Navbar />
        </Col>
        <Col md={10}>
          { children }
        </Col>
      </Row>
    </Container>
  );
}