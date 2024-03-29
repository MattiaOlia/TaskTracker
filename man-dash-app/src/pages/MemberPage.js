import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mockDataTeam } from '../mockData';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddUser from '../components/AddUser';
import Hero from "../components/Hero"

const columns = [
 
  {
    field: 'userName',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 170,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'access',
    headerName: 'Acess',
    width: 110,
    editable: true,
  },
];

function MemberPage() {
  const [rows, setRows] = useState(mockDataTeam.map((obj) => ({
    id: obj.id,
    userName: obj.name,
    email: obj.email,
    age: obj.age,
    phone: obj.phone,
    access: obj.access,
  })));
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:1200px)');
  const handleAddUser = (newUser) => {
    
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        userName: newUser.userName,
        email: newUser.email,
        age: newUser.age,
        phone: newUser.phone,
        access: newUser.access,
      },
    ]);
    
    console.log(newUser);
  };

 
   return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />
        
        <CssBaseline />
        <Box 
          mb={3}
          ml={isSmallScreen ? 0 : 15}
          pt={isMediumScreen ? 4 : 2}         
           mr={isMediumScreen ? 2 : 0}>
          <Hero title="Users" 
                desc="Expand your team! You can easily add new members to your task management system from a pre-existing list. Seamlessly assign tasks to team members and collaborate effectively on projects." 
                />
        <Box 
          display={isMediumScreen ? "flex" : "inherit"}
          alignItems={"center"}
          justifyContent={'space-evenly'}
          margin={"0 1em"}>
        
        <Box p={"1em 3em"} borderRadius={"20px"} bgcolor= {theme.palette.secondary.main} margin={"2em 1em"} width={(isMediumScreen) ? "40%" : "inherit"}>
        <AddUser onAddUser={handleAddUser} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection={isMediumScreen ? 'row' : 'column'}
          flexWrap={isMediumScreen ? 'nowrap' : 'wrap'}
          
          alignContent={"center"}
        >
          
          <Box sx={{ height:400, width:(isMediumScreen) ? "90%" : '80%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableRowSelectionOnClick
            />
            </Box>
          </Box>
        </Box>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  ) 
  }



export default MemberPage;
