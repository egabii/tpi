import Carousel from 'react-bootstrap/Carousel'
import './style.css'
const Carrousel = ({imagenC}) => {
    return (
        <div>
            <Carousel interval={null} fade className='tam' nextLabel={null} prevLabel={null} >
        <Carousel.Item>
            <img
            className="d-block w-100 border tamImg"
            src={imagenC}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 border tamImg"
            src={imagenC}
            alt="Second slide"
            />   
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 border tamImg"
            src={imagenC}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>

        </div>
    )
}

export default Carrousel
