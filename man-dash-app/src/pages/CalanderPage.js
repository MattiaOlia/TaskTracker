import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function Calendario() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        label="Seleziona una data"
        animateYearScrolling
      />
      {selectedDate && (
        <div style={{ marginTop: '16px' }}>
          <p>Data selezionata: {selectedDate.toLocaleDateString()}</p>
          <p>Budge per la data selezionata</p>
        </div>
      )}
    </MuiPickersUtilsProvider>
  );
}

export default Calendario;



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

