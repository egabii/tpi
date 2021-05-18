
import Table from 'react-bootstrap/Table';
import Popup from "./componentsagenda/PopupSolicitud";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import AgendaPage from './AgendaPage'

const Citas = () => {
    const solicitudes=[
        {
            item: 1,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 2,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 3,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 4,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 5,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a> ,
          },
        {
            item: 1,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 2,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 3,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 4,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 5,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a> ,
          },
        {
            item: 1,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 2,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 3,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 4,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
        {
            item: 5,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a> ,
          },
        {
            item: 1,
            apeyNom: 'Gonzalo Zoloaga',
            dni: '12345678',
            cuil: '20123456784',
            fecnac: '21/09/2000',
            telefono: '3777123456',
            mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
          },
  
    ];
            const [buttonPopup, setbuttonPopup] = useState(false);
    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nro</th>
                <th>Nombre y Apellido</th>
                <th>DNI</th>
                <th>Mail</th>
                <th> </th>
                </tr>
            </thead>
                <tbody>
                {solicitudes.map(solicitud =>  
                            <tr>
                                <th>{solicitud.item}</th>
                                <th>{solicitud.apeyNom}</th>
                                <th>{solicitud.dni}</th>
                                <th>{solicitud.mail}</th>
                                <th><btn onClick = {() => setbuttonPopup(true)}class="btn btn-primary">Ver solicitud</btn></th>
                            </tr>
                   )}

                </tbody>
                   
           </Table>
           <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
                <DatosSolicitud ></DatosSolicitud>
            </Popup>
        </div>
    )
}

export default Citas

function DatosSolicitud() {
    return(
    <div>
        <div>
            <h2>Larry the Bird</h2>
            <hr/>
        </div>
        <div className="body">
            <h5>Tipo cliente: No registrado</h5>
            <h5>Asunto: Conocer propiedad</h5>
            <h5>Correo electronico: larrybird@gmail.com</h5>
            <h5>Telefon: 3777257042</h5>
            <h5>Fecha solicitud: 25/05/2021 a las 19:38</h5>
            <h5>Codigo Propiedad: 183</h5>
            <h5>Comentario: que se yo</h5>
            <Link to="/agenda"><btn class="btn btn-success">Asignar agente</btn>
            </Link>

        </div>
    </div>
    )
}