
import React from 'react'
import TextField from "@mui/material/TextField";
import TextArea from "@mui/material/TextareaAutosize";
import Navbar from '../components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import { format } from 'date-fns';

function TaskPage() {
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [isSaveClicked, setIsSavedClicked] = React.useState(false);
  const [taskList,setTaskList]=React.useState([""])

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleSave = () => {
    setIsSavedClicked(true);
    setTaskList([...taskList,{time:currentDate,title:textFieldValue,text:textAreaValue}])
    setTextFieldValue("")
    setTextAreaValue("")
  };
  
  const currentDate = format(new Date(), "dd/MM/yyyy hh:mm");
  const taskListMap = taskList.map((obj)=>{
    return(
        <Box>
             <Typography variant="h6">{obj.time}</Typography>
              <Typography variant="h3">{obj.title}</Typography>
            <Typography variant="body1">{obj.title}</Typography>
        </Box>
    )
  })
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />
        <CssBaseline />
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ margin: "2em" }}
              label="TextField"
              variant="outlined"
              value={textFieldValue}
              onChange={handleTextFieldChange}
            />
            <TextField
              multiline
              rows={5}
              sx={{ margin: "0 2em" }}
              label="TextArea"
              variant="outlined"
              value={textAreaValue}
              onChange={handleTextAreaChange}
            />
            <Box
              sx={{
                display: "flex",
                gap: "1em",
                marginTop: "1em",
                justifyContent: "center",
              }}
            >
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
              <Button variant="contained">Cancel</Button>
            </Box>
          </Box>
          {isSaveClicked && <Box
            p={4}
            sx={{
              mt: "2em",
              borderRadius: "20px",
              bgcolor: `${theme.palette.secondary.main}`,
            }}
          >
              {taskListMap}
          </Box>}
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}


export default TaskPage;