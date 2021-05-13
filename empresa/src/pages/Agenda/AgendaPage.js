import {useState,useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './componentsagenda/Header';
import Reuniones from './componentsagenda/Reuniones';
import AddReunion from './componentsagenda/AddReunion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styleTask from './styleTasks.css';

export default function AgendaPage() {
  const [showAddReunion, setShowAddReunion] = useState (false)
  const [reuniones,setReunion] = useState([{
    id: 1,
    text: "Propiedad alquilada",
    day: "feb 5th at 2:30 pm",
    reminder: false,
  },
  { id: 2, 
    text: "Propiedad vendidad",
    day: "feb 6th at 3:30 pm", 
    reminder: true

  }])
  

  //Delete tasks 
  const borrarReunion = (id) => { 
    setReunion(reuniones.filter((reunion) => reunion.id !== id))
  }

  // cambiar reminder 
  const toggleReminder = (id) => { 
    setReunion(
      reuniones.map((reunion) => 
      reunion.id === id ? {...reunion, reminder: 
      !reunion.reminder} : reunion ))
  }


  //add task 
  const addReunion = (reunion) => { 
    const id = Math.floor(Math.random()*10000)+1
    const newReunion = { 
      id,...reunion
    }
    setReunion([...reuniones,newReunion])
  }
  return (
    <Container className='containerTask'>
      <Row>
        <Col md={8}>
            <Header onAdd = {() => setShowAddReunion(!showAddReunion)} 
            showAdd={showAddReunion}/>
            {showAddReunion && <AddReunion onAdd={addReunion} />}
            {reuniones.length >0 ? ( //mensaje opcional de si hay tareas o no
            <Reuniones reuniones={reuniones} 
            onDelete ={borrarReunion} 
            onToggle= {toggleReminder}/>
            ):('No tasks to show')}
            
        </Col>

      </Row>
    </Container>
      
  );
}