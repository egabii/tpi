import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  let history = useHistory();
  const auth = useAuth();

  const signout = (e) => {
    if (e) {
      e.preventDefault();
    }
    auth.signout(() => history.push("/login"));
  };

  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <Link to={`/home`}>Inicio</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={`/propiedades`}>Propiedades</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={`/agenda`}>Agenda</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <div>
          <a href="#" onClick={signout}> Cerrar Sesion</a>
        </div>
      </Nav.Item>
    </Nav>
  );
}