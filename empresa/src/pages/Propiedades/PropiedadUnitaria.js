import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function PropiedadUnitaria(imagen) {   
    return (
        <Container fluid>
            <Row>
<<<<<<< Updated upstream
                <Col >
                <div>
                    <header>
                        <img src="https://picsum.photos/320/220" alt="" style={{backgroundSize:'cover'}}/>
                    </header>
                
                </div>
=======
                <Col md={8}>
                    <div className="galeria" >
                    <img src="https://picsum.photos/300/250" className="imagenes" alt="..."/>
                    <img src="https://picsum.photos/300/250" className="imagenes" alt="..."/>  
                    
                    </div>
                    <div>
                        <div className="labels">
                            <p >
                                <label >Estado:<button style={{marginLeft: '150px'}}  class="btn btn-primary" type="submit">Button</button></label>
                            </p>
                            <p><label>Precio:</label>
                                <label></label>
                            </p>
                        <p><label>Codigo inmueble:</label></p> 
                        <p><label>Tipo:</label></p>  
                        <p><label>Ubicacion</label></p>  
                        <p><label>Antiguedad:</label></p> 
                        <p><label>Elementos:</label></p> 
                        <p><label>Servicios Adheridos</label></p> 
                            </div>   
                        </div>
                     
>>>>>>> Stashed changes
                </Col>


            </Row>
            
        </Container>
    
    );
  }