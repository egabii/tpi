import { Link } from "react-router-dom";
import PropiedadUnitaria from "../pages/Propiedades/PropiedadUnitaria";
import Carrousel from './Carrousel.js'

export default function Card ({key,titulo, descripcion, imagen,tipo,precio,estado}) {

  /*{Card(propUni => <PropiedadUnitaria
    clave={propUni.key}
    tit={propUni.titulo} 
    descr={propUni.descripcion} 
    img={propUni.imagen}
    prec={propUni.precio}
    estado={propUni.estado}
    tipo= {propUni.tipo} />
  )}*/;
  return (

    <div class="card mb-3" style={{width:'100vw'}} >
      <div class="row g-0">
        <div class="col-md-4" >
          <Link to='/PropiedadUnitaria'>
              <Carrousel imagenC={imagen}/>
          </Link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">{descripcion}</p>
            <p class="card-text">{precio}</p>
            <p class="card-text">{tipo}</p>
            <p class="card-text"><h5><span class="badge bg-success">{estado}</span></h5></p>
          </div>
        </div>
      </div>
    </div>
  )
}