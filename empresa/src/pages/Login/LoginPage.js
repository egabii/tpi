import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'; 
import logo from './logo.jpeg';
import './style.css';
;
export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from } = location.state || { from: { pathname: "/home" } };

  const submit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (
      document.formSingin.formBasicEmail.value !== ''
      && document.formSingin.formBasicPassword.value !== ''
    ) {
      auth.signin(() => {
        history.replace(from);
      });
    }
  };

  return (
    <Container className = "bg-image" fluid>
      <Row>
        <Col sm={12}>
          <Image className="logo" src={logo} alt ="Logo"/>
          <section className="form-section">              
            <label className= "ingreso"> Ingresar </label>
            <Form name="formSingin" onSubmit={submit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contrasenia</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar sesion" />
              </Form.Group>
              <Button className = "btn-margen" variant="success" type="submit">
                Iniciar Sesion
              </Button>
            </Form>
          </section>
        </Col>
      </Row>
    </Container>
  );
}