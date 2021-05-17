import { Link } from "react-router-dom";
import PropiedadUnitaria from "../pages/Propiedades/PropiedadUnitaria";
import Carrousel from './Carrousel.js'

export default function Card ({titulo, descripcion, imagen}) {

  const propie=[

  ]
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
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}