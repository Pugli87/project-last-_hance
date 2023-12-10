import React, { useState } from 'react';
import ListnotFood from 'components/ListnotFood/ListnotFood';
import { Container, Button, Div } from './DiaryStyled';
import DateComponnet from 'components/DateComponent/DateComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as YourSvg } from '../../../assets/icons/calendar.svg';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    setShowCalendar(false);
  };
  return (
    <Container>
      <div className="containerDiary">
        {showCalendar && (
          <DatePicker selected={date} onChange={handleDateChange} inline />
        )}
        <h1>{date.toLocaleDateString()}</h1>
        <button
          className="btnDiary"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <YourSvg />
        </button>
      </div>
        {showCalendar && (
          <DatePicker 
            selected={date} 
            onChange={handleDateChange} 
            inline 
            maxDate={new Date()} 
            className="customDatePicker" 
          />
        )}
        <ProductNameComponent />
        <GramosComponent />
        <KaloriesComponent />
        <ListnotFood/>
        <DateComponnet/>
    </Container>
  )
}

export default Diary