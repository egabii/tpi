import "./estiloimagen.css"

export default function Imagenes() {
    return (
    <div class="card-group">
        <ImagenPrincipal></ImagenPrincipal>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    );
  };

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
