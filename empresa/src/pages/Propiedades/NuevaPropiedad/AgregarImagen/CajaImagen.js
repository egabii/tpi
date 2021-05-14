import "./estiloimagen.css"
import AppImagen from "./AppImagen"
import AppImagen2 from "./AppImg"
export default function Imagenes() {
    return (
    <div class="card-group">
        <AppImagen/>
        <ImagenSec></ImagenSec>
        <ImagenSec></ImagenSec>
    </div>
    );
  };


const ImagenSec = () =>{
    return(
    <div class="card secundario">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    );
}
