import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress  from '@mui/material/LinearProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';


function Widget(props) {
  
  const isLargeScreen=useMediaQuery("(min-width:1200px)")

    return (
      <ThemeProvider theme={theme}>
      <Card sx={{
        width:"100%",
        margin:"1em auto",
        bgcolor: `${theme.palette.secondary.main}`,
        borderRadius:"20px",
        padding: isLargeScreen ? "" : "0 2em"
      }}
    >
        <CardContent>
          <Typography variant={"body1"} color="text.secondary">
            {props.check}
          </Typography>
          <Typography variant="h2" component="div">
            {props.num}
          </Typography>
          <LinearProgress sx={{width:"60%",height:"10px",borderRadius:"20px"}} variant="determinate" value={props.value} />
          <Typography variant={"body1"} color="text.secondary" gutterBottom>
            Progress
          </Typography>
          <CardActions>
        </CardActions>
        </CardContent>
      </Card>
      </ThemeProvider>
        
    )
}

export default Widget