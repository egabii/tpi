
import imagen from  '../assets/edificio.avif';
import Image from 'react-bootstrap/Image';
import propiedades from '../models/propiedades';

const HorizontalCard = ({ propiedad }) => {

  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <Image src={imagen} fluid />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{propiedad.precio}</h5>
            <p className="card-text">
              <span>{propiedad.habitaciones}hab</span>
              <span>{propiedad.banios} {propiedad.banios === 1 ? 'banio' : 'banios'}</span>
              <span>{propiedad.espacio} m2</span>
            </p>
            <p className="card-text">
              <span>{propiedad.tipo}</span>
              <span>{`${propiedad.ubicacion.direccion}, ${propiedad.ubicacion.localidad}`} </span>
            </p>
            <p className="card-text">
              {propiedad.descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const VerticalCard = ({ propiedad }) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <Image src={imagen} fluid />
      <div className="card-body">
        <h3 className="card-title">{propiedad.precio}</h3>
        <p className="card-text">{`${propiedad.ubicacion.direccion}, ${propiedad.ubicacion.localidad}`}</p>
        <p className="card-text card-text-small">{propiedad.descripcion_corta}</p>
      </div>
    </div>
  )
}

export default function CardPropiedad ({propiedad, horizontal}) {
  return (
    <>
    { horizontal 
    ? <HorizontalCard propiedad={propiedad} /> 
    : <VerticalCard propiedad={propiedad} /> }
    </>
  )
}