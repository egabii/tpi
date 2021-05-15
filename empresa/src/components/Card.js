import { Link } from "react-router-dom";

export default function Card ({titulo, descripcion, imagen}) {
  return (

    <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <Link to='/PropiedadUnitaria'>
          <img src={imagen} alt='hola'/>
          </Link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}