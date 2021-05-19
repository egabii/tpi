/// pagina de detalle de una propiedad
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoIosBed } from 'react-icons/io';
import { GiBathtub, GiSandsOfTime, GiSofa } from 'react-icons/gi';
import { BiShapeSquare, BiBuilding, BiBus } from "react-icons/bi";


import './propiedad.css';
export default function Propiedad() {

  return (
    <Container className="padding-top-75">
      <Row>
        <Col sm={8}>
          <section className="house-detail">
            <h1>$400.000</h1>
            <section className="house-features">
              <h2>Caracteristicas</h2>
              <ul className="features-list">
                <li className="feature first">
                  <IoIosBed title="Habitacion" /><br />
                  <span>2 habs.</span>
                </li>
                <li className="feature">
                  <GiBathtub title="Baños" /><br />
                  <span>2 baños</span>
                </li>
                <li className="feature">
                  <BiShapeSquare title="Metros cuadrados" /><br />
                  <span>100 m2</span>
                </li>
                <li className="feature">
                  <BiBuilding title="Pisos" /><br />
                  <span>2 Plantas</span>
                </li>
                <li className="feature">
                  <BiBus title="Transporte" /><br />
                  <span>SI</span>
                </li>
                <li className="feature">
                  <GiSandsOfTime title="Antigüedad" /><br />
                  <span>5años</span>
                </li>
                <li className="feature">
                  <GiSofa title="Amueblado" /><br />
                  <span>NO</span>
                </li>
              </ul>
            </section>
          </section>
          <section className="house-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat ex vitae tellus sodales venenatis et at mauris.
            Nulla vitae odio leo. In tempus est nec massa blandit rutrum. Vestibulum tempus convallis lectus,
            vitae placerat ligula imperdiet quis. Phasellus diam risus, pharetra a laoreet eget, sodales sed lectus.
            Nulla vestibulum ante eget tincidunt consectetur. Aliquam venenatis porttitor diam et rutrum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Cras tincidunt elit eu elit volutpat dapibus. Mauris quis tortor nisl.
            </p>
            <p>Curabitur viverra nulla in velit auctor, ut aliquet leo iaculis. Proin consectetur dui odio, sit amet sodales elit
            ultricies in. Nam commodo venenatis odio, id venenatis purus. Pellentesque lorem urna, mollis vitae dolor eu,
            accumsan luctus magna. Duis lobortis tincidunt est vel dignissim. Fusce auctor, elit nec congue cursus, dui nisi
            imperdiet lacus, sed consectetur ante mauris id turpis. Donec ornare, est vel hendrerit fringilla, nibh magna lobortis dui,
            verra lorem ligula at odio. Sed lacinia velit vitae bibendum convallis. Donec volutpat, massa et tincidunt mollis, erat neque
            vestibulum nibh, sit amet vulputate dui magna in nisl. Curabitur magna ipsum, placerat a nunc vitae, vulputate interdum est.
            Aenean enim risus, dignissim vitae nibh suscipit, accumsan laoreet enim. Quisque faucibus leo quis orci ullamcorper mattis.
            Cras vitae leo eu arcu tempus venenatis.
            </p>
          </section>
        </Col>
        <Col sm={4}>
          <div className="form-container">
            <Form>
              <Form.Group controlId="nombreCompleto">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="Nombre completo" required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" required />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="+543624034530" required />
              </Form.Group>
              <Form.Group controlId="comment">
                <Form.Label>Comentario (opcional)</Form.Label>
                <Form.Control as="textarea" rows={3} col={3} />
              </Form.Group>
              <Button variant="primary" type="submit" block>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}