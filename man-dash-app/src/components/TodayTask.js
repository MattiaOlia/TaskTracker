import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import image1 from "../components/img/Time management-amico 1.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

export default function TodayTask() {
    
    const isLargeScreen=useMediaQuery("(min-width:1200px)")
    
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
                <Container>
                     <Box p={4} sx={{ borderRadius:"20px", bgcolor: `${theme.palette.secondary.main}`, display:"flex"}}>
                     <Box sx={{display:"inline-block"}}>
                     <Typography variant='h2'>Today'ss Task</Typography>
                     <Typography variant='body1'>Check your daily task.</Typography>
                     <Link to="/tasks"> <Button sx={{marginTop:"1.5em"}} variant="contained">Today’s schedule</Button></Link></Box>
                     {(isLargeScreen) && <Box sx={{margin:"-5em auto", display: 'inline-block', justifyContent: 'center', alignItems: 'center' }}>
                          <img src={image1} alt="1 image" style={{ marginRight:"0",width: "250px" }}/></Box>}
      </Box>
    
             </Container>
       </React.Fragment>
       </ThemeProvider>
    )
}



