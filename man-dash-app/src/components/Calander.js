import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{
        width: "100%",
        height: "100%",
        minWidth: "300px", // Imposta la larghezza minima
        minHeight: "200px", // Imposta l'altezza minima
      }}>
        <DateCalendar sx={{width:"100%", height:"100%"}} />
      </Box>
    </LocalizationProvider>
  );
}