import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Divider, ListItem, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import image2 from "../components/img/Design community-pana 2.png"
import BasicDateCalendar from './Calander';
import UserAvatar from './Useravatar';


function UserAvatarOnline() {
    const isMediumScreen=useMediaQuery("(max-width:960px)")
    const isSmallScreen=useMediaQuery("(min-width:600px")
      
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
                 
                <Box sx={{ 
  width: isMediumScreen ? 'unset' : '100%',
  maxWidth: isMediumScreen ? 'unset' : 350,
  bgcolor: `#F5F2FF`,
  borderRadius: '20px',
  position: isMediumScreen ? 'relative' : 'fixed',
  top: isMediumScreen ? 2 : 10,
  bottom: isMediumScreen ? 'unset' : 10,
  right: isMediumScreen ? 'unset' : 10,
  display: isMediumScreen ? 'flex' : '',
  flexDirection: isMediumScreen ? 'column' : '',
  alignItems: isMediumScreen ? 'center' : '',
  mt: isSmallScreen ? 0: 4,
  marginLeft: isSmallScreen ? 16 : 0,
  marginRight: isMediumScreen ? 3 : 0
}}>
                 
                  <UserAvatar />
                    <Divider  sx={{width:"80%", border:"solid 1px grey", margin:"0 auto"}} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column', 
                        alignItems:'center',
                        justifyItems:"center",
                        p: isMediumScreen ? "2em 4em" : "2em",
                        
                      }}>
                      
                      <Box >
                      <Typography variant={'h3'}>We are design agency work with you</Typography>
                      <Typography variant={"body1"}>Bringing well crafted design and scalable infrastructure</Typography>
                      <Button  sx={{marginTop:"0.7em"}}  variant='contained'>Hire us</Button>
                      </Box>
                    </Box>
                    {!isMediumScreen &&
                    <Box>
                      <BasicDateCalendar />
                      </Box>  }
                  </Box>
                  
             
        </React.Fragment>
        </ThemeProvider>
    )
}

export default UserAvatarOnline