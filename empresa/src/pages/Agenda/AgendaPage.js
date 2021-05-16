import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import citasModel from './citas.model';
import './agenda.css';

export default function AgendaPage() {
  const [citas, setCitas] = useState(() => citasModel);

/*   TODO: const [filtros, setFiltros] = useState([
    {'hoy': true,  'semana': false, 'mes': false}
  ]); */

  return (
    <Container fuild>
      <h2>Agenda</h2>
      <Row>
        <Col md={12}>
          <section className="section-appts">
            { citas.map(cita => <Card className="card-appts">
              <Card.Body>
                <Card.Title>{cita.asunto}</Card.Title>
                <Card.Text>
                  <p>Cliente {cita.cliente.nombre}</p>
                  <p>Agente {cita.agente}</p>
                  <p>Fecha: {cita.fecha}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Card.Link href="#">Ver Detalle</Card.Link>
              </Card.Footer>
            </Card>)
            }
          </section>
        </Col>
      </Row>
    </Container>
  );
}