import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './estilo.css';
import FiltroPropiedades from "./FiltroPropiedades"

export default function PropiedadesPage() {

  const propiedades = [
    {
      inmueble: 1,
      titulo: 'Carri',
      descripcion:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam nulla, necessitatibus rem praesentium expedita ut id aliquid delectus minima iure ullam nisi quasi voluptates corporis! Labore, nobis! Nobis, autem!",
      image: 'https://picsum.photos/320/220'
    },
    {
      inmueble: 2,
      titulo: 'Gonza',
      descripcion:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam nulla, necessitatibus rem praesentium expedita ut id aliquid delectus minima iure ullam nisi quasi voluptates corporis! Labore, nobis! Nobis, autem!",
      image: 'https://source.unsplash.com/random/320x220'
    },
    {
      inmueble: 3,
      titulo: 'Matias',
      descripcion:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam nulla, necessitatibus rem praesentium expedita ut id aliquid delectus minima iure ullam nisi quasi voluptates corporis! Labore, nobis! Nobis, autem!",
      image: 'https://picsum.photos/320/220'
    }, 
    {
      inmueble: 4,
      titulo: 'Matias',
      descripcion: "Lorem, ipsum dolor sit amet consectetur ",
      image: 'https://source.unsplash.com/random/320x220'
    },
    {
      inmueble: 5,
      titulo: 'Matias',
      descripcion: "Lorem, ipsum dolor sit amet consectetur ",
      image: 'https://source.unsplash.com/random/320x220'
    },
    {
      inmueble: 6,
      titulo: 'Matias',
      descripcion: "Lorem, ipsum dolor sit amet consectetur ",
      image: 'https://source.unsplash.com/random/320x220'
    },
  ];

  return (
    <div>
      <div className="header">
        <FiltroPropiedades></FiltroPropiedades>
      </div>
      <div className="body">
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
    </div>
  );
}