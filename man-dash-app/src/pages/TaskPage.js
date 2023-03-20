
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
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete'
import {Divider} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hero } from '../components/Hero';

function TaskPage() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen=useMediaQuery("(min-width:960px")
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [isSaveClicked, setIsSavedClicked] = React.useState(false);
  const [taskList, setTaskList] = React.useState([]);
  const [selectedObj, setSelectedObj] = React.useState(true);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleSave = () => {
    setIsSavedClicked(true);
    const currentDate = format(new Date(), "dd/MM/yyyy hh:mm");
    const newTask = { time: currentDate, title: textFieldValue, text: textAreaValue, isChecked: false };
    setTaskList([...taskList, newTask]);
    setTextFieldValue("");
    setTextAreaValue("");
  };

  const handleCancel = () => {
    setTextFieldValue("");
    setTextAreaValue("");
  }

  const handleCheck = (index) => {
    setSelectedObj(()=> !selectedObj)
    const updatedTaskList = taskList.map((obj, i) => {
      if (i === index) {
        return { ...obj, isChecked: selectedObj };
      }
      return obj;
    });
    setTaskList(updatedTaskList);
  };


  const handleDelete = (index) => {
    const updatedTaskList = taskList.filter((obj, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const taskListMap = taskList.map((obj, index) => {
    if (!obj) {
      return null;
    }
    const textColor = obj.isChecked ? "gray" : "black";
    return (
      <Box key={index}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5em",
            color: textColor,
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              {obj.time}
            </Typography>
            <Typography variant="h3">{obj.title}</Typography>
            <Typography variant="body1">{obj.text}</Typography>
          </Box>
          <Box>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="checked" onClick={() => handleCheck(index)}>
                <CheckIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ width: "100%", border: "solid 1px grey", margin: "1em auto" }} />
      </Box>
    );
  });
  
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />
        <CssBaseline />
        <Box
          display="flex"
          flexDirection={isMediumScreen ? "row" : "coloumn"}
          flexWrap={isMediumScreen ? "nowrap" : "wrap" } 
          ml={isSmallScreen ? 0 : 15}
          pt={isMediumScreen ? 7 : 2}
          mr={isMediumScreen ? 2 : 0}
        >
          <Hero />
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            width={isMediumScreen ? "50%" : "100%"} 
          >
            <TextField
              sx={{ margin: "2em" }}
              label="Title"
              variant="outlined"
              value={textFieldValue}
              onChange={handleTextFieldChange}
            />
            <TextField
              multiline
              rows={5}
              sx={{ margin: "0 2em" }}
              label="Text"
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
              <Button onClick={handleCancel} variant="contained">
                Cancel
              </Button>
            </Box>
          </Box>
          <Box
            p={4}
            m={2}
            sx={{
              mt: isMediumScreen ? "0" : "2em",
              borderRadius: "20px",
              bgcolor: `${theme.palette.secondary.main}`,
              flexGrow: 1,
              width: isMediumScreen ? "50%" : "inherit", 
            }}
          >
            {isSaveClicked && [taskListMap]}
          </Box>
        </Box>
      </React.Fragment>
    </ThemeProvider>
   );
  }

export default TaskPage 