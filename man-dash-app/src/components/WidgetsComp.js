import React from 'react'
import Widget from './Widget'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function WidgetsComp() {
    const isLargeScreen=useMediaQuery("(min-width:1200px")
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
               <Container>
                    <Box >
                       {isLargeScreen ? 
                        <Grid container spacing={2}>
                         <Grid item xs={4}>
                            <Widget check={"Users"} 
                                     num={"9"}
                                     value={90}/>
                            </Grid>
                            <Grid item xs={4}>
                            <Widget check={"Today's Tasks"} 
                                     num={"2"}
                                     value={10} />
                            </Grid>
                            <Grid item xs={4}>
                            <Widget check={"Monthly Tasks"} 
                                     num={"8"}
                                     value={20} />
                            </Grid>
                         </Grid> : 
                         <Box>
                         <Widget check={"Users"} 
                                     num={"9"}
                                     value={90} />
                         <Widget check={"Today's Tasks"} 
                                     num={"2"}
                                     value={10}/><Widget  check={"Monthly Tasks"} 
                                     num={"8"}
                                     value={20}  /></Box>}
                         
                       
                        
</Box>
                    
</Container>
       </React.Fragment>
       </ThemeProvider>
    )
}

export default WidgetsComp