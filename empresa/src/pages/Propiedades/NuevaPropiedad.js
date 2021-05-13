import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FormPropietario from '../../components/FormularioPropietario';
import FormUbicacion from '../../components/FormularioUbicacion';
export default function NuevaPropiedad() {
  return (
    <>
    <Tabs defaultActiveKey="propietario"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario">
        <FormPropietario />
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion">
        <FormUbicacion />
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
        <p>tab 3</p>
      </Tab>
    </Tabs>
    </>
  );
}