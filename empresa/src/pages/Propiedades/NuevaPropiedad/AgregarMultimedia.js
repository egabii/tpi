import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Imagenes from "./CajaImagen"
export default function AgregarMultimedia() {
  return (
  <>
    <NuevaPropiedad/>
    <Imagenes />
    <Link to= '/NuevaPropiedad/Descripcion'><Button>Anterior</Button></Link>
    <Link to= '/propiedades'><Button>Siguiente</Button></Link>
  </>
  );
}
export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="multimedia"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario">
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion">
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia">
      </Tab>
    </Tabs>
    </>
  );
}