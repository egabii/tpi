import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './estilo.css';
import FiltroPropiedades from "./FiltroPropiedades";
import Button from 'react-bootstrap/Button';
import PropiedadUnitaria from './PropiedadUnitaria';


export default function PropiedadesPage() {

  const propiedades = [
    {
      inmueble: 1,
      titulo: 'Lorem, ipsum dolor',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://www.arrambide.com/wp-content/uploads/2020/01/20.jpg',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento',
    },
    {
      inmueble: 2,
      titulo: 'Lorem, ipsum dolor',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    },
    {
      inmueble: 3,
      titulo: 'Lorem, ipsum dolor',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://media.istockphoto.com/photos/modern-suburban-house-exterior-picture-id1145727455',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    }, 
    {
      inmueble: 4,
      titulo: 'Lorem, ipsum dolor',
      descripcion: 'Corrientes capital la ciduadasdsada',
      image: 'https://media.istockphoto.com/photos/brand-new-suburban-house-in-sunny-summer-afternoon-picture-id184405421',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    }
  ];

  return (
    <div>
      <div className="header">
        <FiltroPropiedades></FiltroPropiedades>
      </div>
      <div className="body">
        <div className="caja-tarjetas">

          { propiedades.map(propiedad => <Card 
            key={propiedad.inmueble} 
            titulo={propiedad.titulo} 
            descripcion={propiedad.descripcion} 
            imagen={propiedad.image}
            precio={propiedad.precio}
            estado={propiedad.estado}
            tipo= {propiedad.tipo}
          />) },
        </div>
      </div>
    </div>
  );
}