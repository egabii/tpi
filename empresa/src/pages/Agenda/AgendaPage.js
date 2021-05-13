import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css";

export default function AgendaPage() {
  return (
    <div className="container">
      <div className ="header">
        <h1>AGENDA</h1>
      </div>
      <div className = 'listaReuniones'>
        <Card className='bg-tareas'>
          <Card.Header>ULTIMAS ACCIONES</Card.Header>
          <Card.Body  >
            <Card.Text>
              <ListGroup>
              <ListGroup.Item action variant="info">
                Venta Realizada
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Venta Realizada
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Venta Realizada
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Venta Realizada
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Alquiler Realizado
              </ListGroup.Item>
              </ListGroup>
            </Card.Text>
              <Button variant="success">Nueva Propiedad</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}