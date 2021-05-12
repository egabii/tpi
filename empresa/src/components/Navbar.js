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
    <Nav as="ul" className="nav nav-pills flex-column mb-auto">
      <Nav.Item as="li">
        <Link to={`/home`} className="nav-link text-white pepito">Inicio</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={`/propiedades`} className="nav-link text-white">Propiedades</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={`/agenda`} className="nav-link text-white">Agenda</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <div>
          <a href="#" onClick={signout} className="nav-link text-white"> Cerrar Sesion</a>
        </div>
      </Nav.Item>
    </Nav>
  );
}