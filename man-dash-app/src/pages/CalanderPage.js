
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hero from "../components/Hero"


function MyCalendar() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(min-width:1200px)");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventAdd = () => {
    const eventData = {
      date: selectedDate,
      text: eventText,
    };
    setEvents([...events, eventData]);
    setEventText("");
    console.log(eventData);
  };

  const eventsM = events
    .filter((event) => event.date.toDateString() === selectedDate.toDateString())
    .map((event, i) => (
      <div key={i}>
        <p>{event.text}</p>
      </div>
    ));

  if (eventsM.length === 0) {
    eventsM.push(
      <p key="none">There is no event in program for this date</p>
    );
  }

  return (
    <ThemeProvider theme={theme}>
       
      <div className="calendar">
        <React.Fragment>
          <Navbar />
          <CssBaseline />
          <Box
           mb = {3}
            ml={isSmallScreen ? 0 : 15}
            pt={isMediumScreen ? 4 : 2}
            mr={isMediumScreen ? 2 : 0}>
              <Hero title="Calander" />
          <Box
            display={isMediumScreen ? "flex" : "inherit"}
            alignItems={"flexStar"}
            justifyContent={"space-evenly"}
            margin={"2em"}
            >
            
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} m={2}>
            <Calendar
            width={(isMediumScreen) ? "400px" : "1500px"}
              value={selectedDate}
              onClickDay={handleDateClick}
              tileClassName={({ date, view }) => {
                const hasEvent = events.some(
                  (event) => event.date.toDateString() === date.toDateString()
                );
                return view === "month" && hasEvent ? "has-event" : "";
              }}
            />
            <style>
              {`
              abbr[title] {
                text-decoration: none;
              }
              
              .react-calendar__tile--now{
                background-color: #C3A6D8;
              }
              .react-calendar__tile--now hover {
                background-color: #C3A6D8;
            }
            .react-calendar__tile {
              border-radius: 50%;
              width: 50px;
              height: 50px;
              color:black
            }
        
            .react-calendar__tile--active {
              background-color: #9854CB
              color: white;
          }
          .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
            background: #9854CB;
        }
              
              .has-event {
                background-color: #DDACF5;
              }
              `}
            </style>
            
              </Box>
             
              <Box
                p={4}
                borderRadius={"20px"}
                bgcolor={theme.palette.secondary.main}
                margin={"0 1em"}
                width={isMediumScreen ? "40%" : "inherit"}
                display={"flex"}
                justifyContent={"space-evenly"}
                flexDirection={"column"}
                >
                <Box sx={{padding:"2em"}}>
                <p>{selectedDate.toLocaleDateString()}</p>
                {eventsM}
                </Box>
               <Box display={"flex"}  flexDirection={"column"} gap={1} alignItems={"center"} mt={5} >
                <TextField
                  label="Add event"
                  variant="outlined"
                  value={eventText}
                  onChange={(event) => setEventText(event.target.value)}
                  sx={{width:"90%"}}
                />
                <Button sx={{width:"fit-Content"}} variant="contained" onClick={handleEventAdd}>
                  Save
                </Button>
                </Box>
                </Box>
              </Box>
           
          </Box>
        </React.Fragment>
      </div>
     
    </ThemeProvider>
  );
}

export default MyCalendar;




