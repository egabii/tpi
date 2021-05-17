import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './estilo.css';
import FiltroPropiedades from "./FiltroPropiedades"

export default function PropiedadesPage() {

  const propiedades = [
    {
      inmueble: 1,
      titulo: 'Carri',
      descripcion: 'Bella Vista',
      image: 'https://picsum.photos/320/220'
    },
    {
      inmueble: 2,
      titulo: 'Gonza',
      descripcion: 'Bella Vista',
      image: 'https://picsum.photos/320/220'
    },
    {
      inmueble: 3,
      titulo: 'Matias',
      descripcion: 'Corrientes',
      image: 'https://picsum.photos/320/220'
    }, 
    {
      inmueble: 4,
      titulo: 'Matias',
      descripcion: 'Corrientes',
      image: 'https://picsum.photos/320/220'
    }
  ];

  return (
    <div>
      <div className="header">
        <FiltroPropiedades></FiltroPropiedades>
      </div>
      <div className="body">
        <Link to="/NuevaPropiedad"> Nueva Propiedad </Link>
        <div className="caja-tarjetas">
          
          { propiedades.map(propiedad => <Card 
            key={propiedad.inmueble} 
            titulo={propiedad.titulo} 
            descripcion={propiedad.descripcion} 
            imagen={propiedad.image}
          />) }

           
        </div>
      </div>
    </div>
  );
}