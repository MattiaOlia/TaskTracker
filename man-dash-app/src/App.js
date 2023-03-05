import {  ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import { TodayTask } from './components/TodayTask';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
   if (isSmallScreen) 
     return (
      <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <TodayTask />
      </ThemeProvider>
      </div>
  );
  else return(
    <div><div className="App">
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box ml={15} border={"solid"}>
        <TodayTask />
      </Box> 
    </ThemeProvider>
    </div></div>
  )
}

export default App;

//* https://www.figma.com/file/VYCGTQKB5SSUDYHNkq09HH/Task-Management-Dashboard-(Community)?node-id=0%3A1&t=ktkXrRFJjYaD7fSi-0