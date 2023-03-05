import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import image1 from "../components/img/Time management-amico 1.png"
import useMediaQuery from '@mui/material/useMediaQuery';


export function TodayTask() {
    
    const isMediumScreen=useMediaQuery("(min-width:1200px)")

    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
                <Container>
                     <Box mt={5} sx={{ bgcolor: '#cfe8fc', display:"flex" }}>
                     <Box sx={{display:"inline-block"}}>
                     <Typography variant='h2'>Today Task</Typography>
                     <Typography variant='body1'>Check your daily tasks and schedules</Typography>
                     <Button sx={{marginTop:"1.5em"}} variant="contained">Today’s schedule</Button></Box>
                     {(isMediumScreen) && <Box sx={{margin:"-7em auto", display: 'inline-block', justifyContent: 'center', alignItems: 'center' }}>
      <img src={image1} alt="Example image" style={{ width: "300px" }}/></Box>}
      </Box>
    
             </Container>
       </React.Fragment>
       </ThemeProvider>
    )
}



