import React from 'react';
import calendar from './calendar.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
const Calendar = () => {
    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
    return (
        <div>
             <CalendarComponent value= {dateValue} isMultiSelection={true} ></CalendarComponent>
        </div>
    )
}

export default Calendar
