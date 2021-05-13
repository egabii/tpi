
import Imagenes from "./CajaImagen"
export default function NuevaPropiedad() {
  return (
  <div class="card text-center">
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">Multimedia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Ubicacion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Propietario</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Descripcion</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <Imagenes></Imagenes>
    </div>
  </div>
  );
}