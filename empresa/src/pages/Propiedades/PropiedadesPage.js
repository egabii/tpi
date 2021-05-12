import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './estilo.css';

export default function PropiedadesPage() {

  const propiedades = [
    {
      inmueble: 1,
      titulo: 'Carri',
      descripcion: 'Bella Vista',
      image: 'https://picsum.photos/10/10'
    },
    {
      inmueble: 2,
      titulo: 'Gonza',
      descripcion: 'Bella Vista',
      image: 'https://picsum.photos/10/10'
    },
    {
      inmueble: 3,
      titulo: 'Matias',
      descripcion: 'Corrientes',
      image: 'https://picsum.photos/10/10'
    }
  ];

  return (
    <div>
      <h1>Pagina de propiedades</h1>
      <Link to="/nuevaPropiedad"> Nueva Propiedad </Link>
      <div className="caja-tarjetas">
        { propiedades.map(propiedad => <Card 
          key={propiedad.inmueble} 
          titulo={propiedad.titulo} 
          descripcion={propiedad.descripcion} 
          imagen={propiedad.image}
        />) }
      </div>
    </div>
  );
}