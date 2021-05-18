import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carrousel from '../../components/Carrousel'

export default function PropiedadUnitaria(props) {  
    
    
    return (
        <Container fluid>
            <Row>
                <Col >
                    <div className="galeria" >
                        <Carrousel imagenC= 'https://source.unsplash.com/random/' />
                    </div>
                    <hr />
                    <div>
                        <div className="labels">
                            <h2>Datos Propiedad</h2>
                            <p >
                                <label >Estado:<button style={{marginLeft: '150px'}}  class="btn btn-primary" type="submit">Editar estado</button></label>
                            </p>
                            <p><label>Precio:</label>
                                <label>{props.prec}</label>
                            </p>
                        <p><label>Codigo inmueble: </label><label>{props.clave}</label></p> 
                        <p><label>Tipo:</label><label></label></p>  
                        <p><label>Ubicacion</label><label>dffbdfb</label></p>  
                        <p><label>Antiguedad:</label><label>Codigo inmueble:</label></p> 
                        <p><label>Elementos:</label><label>Codigo inmueble:</label></p> 
                        <p><label>Servicios Adheridos</label></p> 
                            </div>   
                        </div>
                     
                </Col>


            </Row>
            
        </Container>
    
    );
  }