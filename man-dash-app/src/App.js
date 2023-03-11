import {  ThemeProvider } from '@mui/material/styles';
import {  Typography } from '@mui/material';
import theme from "./theme"
import Navbar from './components/Navbar';
import TodayTask from "./components/TodayTask"
import useMediaQuery from '@mui/material/useMediaQuery';
import UserAvatarOnline from './components/UserAvatarOnline';
import WidgetsComp from './components/WidgetsComp';
import { Box, palette } from '@mui/system';
import Chart from './components/Chart';
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen=useMediaQuery("(min-width:960px")
  if (isSmallScreen) {
    return (
    
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
          <UserAvatarOnline />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box mt={2} sx={{ flex: '1 0 auto' }} />
            <TodayTask sx={{ flex: '0 1 auto' }} />
          </Box>
          <WidgetsComp />
          <Chart />
        </ThemeProvider>
       
      </div>
     
    );
  } else {
    return (
      
      
      <Box sx={{ backgroundColor: theme.palette.backgroundCol }}>
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Navbar />
            <UserAvatarOnline />
            <Box ml={13} pt={(isMediumScreen) ? 7 : 2} mr={(isMediumScreen) ? 45 : 0} >
              <TodayTask  /> 
              <WidgetsComp />
              <Chart />
              
            </Box>

          </div>
          </ThemeProvider>
        </Box>
     
    );
  }
}

export default App;

//* https://www.figma.com/file/VYCGTQKB5SSUDYHNkq09HH/Task-Management-Dashboard-(Community)?node-id=0%3A1&t=ktkXrRFJjYaD7fSi-0



