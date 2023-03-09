import {  ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import { TodayTask } from './components/TodayTask';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import UserAvatarOnline from './components/UserAvatarOnline';
import Widget from './components/Widget';
import WidgetsComp from './components/WidgetsComp';

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
          <Widget />
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Navbar />
            <UserAvatarOnline />
            <Box ml={13} mt={(isMediumScreen) ? 13 : 2} mr={(isMediumScreen) ? 45 : 0} border={"solid"}>
              <TodayTask  /> 
            </Box>
            <Widget />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;

//* https://www.figma.com/file/VYCGTQKB5SSUDYHNkq09HH/Task-Management-Dashboard-(Community)?node-id=0%3A1&t=ktkXrRFJjYaD7fSi-0