import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import image1 from "../components/img/Time management-amico 1.png"
import UserAvatar from './Useravatar';



export default function Hero(props) {
    const isLargeScreen=useMediaQuery("(min-width:1200px)")
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline>
                <Container  maxWidth={"none"} >
                     <Box p={4} sx={{ borderRadius:"20px", bgcolor: `${theme.palette.secondary.main}`, display:"flex", justifyContent:" space-between"}}>
                     <Box sx={{display:"inline-block"}}>
                     <Typography variant='h2'>{props.title}</Typography>
                     <Typography variant='body1'>Check your daily tasks and schedules</Typography>
                     </Box>
                     {(isLargeScreen) && <Box sx={{marginRight:"2em"}}> <UserAvatar />
                     </Box>}
                     </Box>
                     </Container>
                     </CssBaseline>
                     </React.Fragment>
                     </ThemeProvider>
    )
}
