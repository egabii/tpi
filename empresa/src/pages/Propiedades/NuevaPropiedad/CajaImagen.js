import "./estiloimagen.css"
import AppImagen from "./AppImagen"

export default function Imagenes() {
    return (
    <div class="card-group">
        <div class="card">
            <AppImagen/>
        </div>
    </div>
    );
  };

/*
const ImagenPrincipal = () => {
    return (
    <div class="card"> 

            <div class="display-box">
                <div class="icon-text-box">
                    <div class="upload-icon">
                        <img class="caja-card fa fa-upload" aria-hidden="true" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png"/>
                    </div>
                    <div class ="upload-text">
                        <div>
                            <h4>Elegir archivo</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="file" class="upload-image-input" accept="image/*"></input>
                </div>
            </div>
    </div>
    );
  }
*/