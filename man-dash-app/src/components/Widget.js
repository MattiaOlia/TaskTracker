import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress  from '@mui/material/LinearProgress';



  

function Widget() {

    return (
        <Card  p={1} >
        <CardContent>
          <Typography variant={"body1"} color="text.secondary" gutterBottom>
            Users
          </Typography>
          <Typography variant="h2" component="div">
            150
          </Typography>
          <LinearProgress sx={{width:"50%"}} variant="determinate" value={50} />
          <Typography variant={"body1"} color="text.secondary" gutterBottom>
            Progress
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained'>Learn More</Button>
        </CardActions>
      </Card>
      
        
    )
}

export default Widget