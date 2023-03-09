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



function UserAvatarOnline() {
    const isMediumScreen=useMediaQuery("(max-width:960px)")
    const isSmallScreen=useMediaQuery("(min-width:600px")
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
                <Container>
                
                <Box sx={{ 
  width: isMediumScreen ? 'unset' : '100%',
  maxWidth: isMediumScreen ? 'unset' : 350,
  bgcolor: isMediumScreen ? '#cfe8fc' : '',
  border: isMediumScreen ? '' : 'solid',
  borderRadius: '20px',
  position: isMediumScreen ? 'relative' : 'fixed',
  top: isMediumScreen ? 'unset' : 10,
  bottom: isMediumScreen ? 'unset' : 10,
  right: isMediumScreen ? 'unset' : 10,
  marginLeft: isMediumScreen ? 13 : 'unset',
  display: isMediumScreen ? 'flex' : '',
  flexDirection: isMediumScreen ? 'column' : '',
  alignItems: isMediumScreen ? 'center' : '',
  mt: isMediumScreen ? 3 : '',
  marginLeft: isSmallScreen ? 13 : 0
}}>
                 
                  <Box width={"100%"} mt={2} sx={{display:"flex",flexAlign:"center", justifyContent:"center",alignItems:"center"}}  >
                    <Box  sx={{width:"fit-content", padding:"1em"}}  >
                    <StyledBadge 
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                            <Avatar sx={{ width: 60, height: 60 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", flexAlign:"center", justifyContent:"center",alignItems:"center"}}>
                    <h3 style={{margin:0}}>Mattia Olia</h3>
                    <p style={{margin:0}}>Front End</p>
                    </Box>
                    </Box>
                    <Divider  sx={{width:"80%", border:"solid 1px grey",margin:"1em auto"}} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column', 
                        alignItems:'center',
                        justifyItems:"center",
                        p: isMediumScreen ? "2em 4em" : "2em",
                        pt: 0,
                      }}>
                      <img style={{maxWidth:"250px"}} src={image2} alt="2 image" />
                      <Box >
                      <Typography variant={'h3'}>We are design agency work with you</Typography>
                      <Typography variant={"body1"}>Bringing well crafted design and scalable infrastructure</Typography>
                      <Button  sx={{marginTop:"0.7em"}}  variant='contained'>Hire us</Button>
                      </Box>
                    </Box>
                  </Box>
                  
              </Container>
        </React.Fragment>
        </ThemeProvider>
    )
}

export default UserAvatarOnline