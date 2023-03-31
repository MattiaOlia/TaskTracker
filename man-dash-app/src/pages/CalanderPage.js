import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventText, setEventText] = useState('');
  const [events, setEvents] =useState([])

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventAdd = () => {
    const eventData = {
      date: selectedDate,
      text: eventText,
    };
    setEvents([...events, eventData]);
    setEventText("");

    console.log(eventData);
  };
  
  const eventsM = events
  .filter((event) => event.date.toDateString() === selectedDate.toDateString())
  .map((event, i) => (
    <div key={i}>
      {i === 0 && <h3>{event.date.toLocaleDateString()}</h3>}
      <p>{event.text}</p>
    </div>
  ));
  
  return (
    <ThemeProvider theme={theme}>
      <div className="calendar">
        <h2>Calendario</h2>
        <Calendar
          value={selectedDate}
          onClickDay={handleDateClick}
          
          tileClassName={({ date, view }) => {
            const hasEvent = events.some((event) =>
              event.date.toDateString() === date.toDateString()
            );
            return view === "month" && hasEvent ? "has-event" : "";
          }}
        />
        <style>
{`
abbr[title] {
 text-decoration: none;
}


  .react-calendar__tile{
    background-color: "white";
    border-radius:50%;
    width: 50px;
    height: 50px;
  }
  .has-event {
    background-color: green
  }
  
`}</style>
      <div>
      <TextField
        label="Aggiungi un evento"
        variant="outlined"
        value={eventText}
        onChange={(event) => setEventText(event.target.value)}
      />
      <Button variant="contained" onClick={handleEventAdd}>Aggiungi</Button>
    </div>
    
     {eventsM}
      </div>
    </ThemeProvider>
  );
}

export default MyCalendar








{
/*import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Typography, Box, Paper } from '@mui/material';
import * as dayjs from 'dayjs'
export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateList, setDateList] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateList([...dateList, date]);
  };
  const elementDateList = dateList.map((obj) => {
    return <Typography key={obj.valueOf()}>{obj.format('YYYY-MM-DD')}</Typography>;
  });
  
  const textColor = 'black';
  const bgcolor = 'white';
  const isSelected = selectedDate && dayjs().isSame(selectedDate, 'day');
  const isDisabled = dayjs().isBefore(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        {selectedDate && <h1>{selectedDate.format('YYYY-MM-DD')}</h1>}
        <DateCalendar
  date={selectedDate}
  onChange={handleDateChange}
  renderday={(day, _value, dayState) =>
    <div
      key={day.format()}
      style={{
        color: textColor,
        bgcolor,
        borderRadius: isSelected ? '50%' : 0,
        p: 1,
        textAlign: 'center',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      onClick={isDisabled ? undefined : () => handleDateChange(day)}
    >
      {day.format('D')}
    </div>
  }
/>
        {elementDateList}
      </DemoContainer>
    </LocalizationProvider>
  );
}*/}

