import { Link } from "react-router-dom";
import PropiedadUnitaria from "../pages/Propiedades/PropiedadUnitaria";
import Carrousel from './Carrousel.js'

<<<<<<< Updated upstream
export default function Card ({titulo, descripcion, imagen}) {

  const propie=[

  ]
=======
export default function Card ({titulo, descripcion, imagen,tipo,precio,estado}) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <p class="card-text">{descripcion}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
=======
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">{precio}</p>
            <p class="card-text"><span class="badge bg-secondary">{estado}</span></p>
            <p class="card-text">{tipo}</p>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  )
}