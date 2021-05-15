
import {useState,useEffect} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './componentsagenda/Header';
import Reuniones from './componentsagenda/Reuniones';
import AddReunion from './componentsagenda/AddReunion';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Calendar from './Calendar/Calendar.js';
import  styleTask from './styleTasks.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Schedule from './Schedule/Schedule.js'

export default function AgendaPage() {
  return (
    <Container>
      <div className="titulo"><h2 className ="letra-titulo">Tu Agenda</h2></div>
      <Row>
        <Col >        
          <Schedule/>
        </Col>
      </Row>
    </Container>
      
  );
}