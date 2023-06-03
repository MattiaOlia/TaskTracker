import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box, display } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

function AddUser({ onAddUser }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:1200px)');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [access, setAccess] = useState('');
  
  
  const handleAddUser = () => {
   if (isValid) { const newUser = {
      userName: userName,
      age: age,
      email: email,
      phone: phone,
      access: access,
    };
    onAddUser(newUser);
    setUserName('');
    setAge('');
    setEmail('');
    setPhone('');
    setAccess('');
   
  };
}
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  
  };

  const handleAgeChange = (e) => {
    const ageValue= e.target.value;
    if (!isNaN(ageValue)){
      setAge(ageValue);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    if (!isNaN(phoneValue)) {
      setPhone(phoneValue);
    }
  };

  const handleAccessChange = (e) => {
    setAccess(e.target.value);
  };
  
  const isValid = userName && age && email && phone && access;

  if (isSmallScreen){
     return (
    <Box sx={{
      width:"100%",
      justifyContent:"center",
      display: "flex",
      flexDirection :"column",
      
      }}>
        <Box >
    <Box  sx={{
        width:"100%",
        justifyContent:"center",
        display: "flex",
        flexDirection :"column",
        padding: (isMediumScreen) ? "0em auto" : "2em",
        gap:(isMediumScreen) ?"2em":"1em"
    }}>
        <TextField
          label="Name"
          value={userName}
          onChange={handleUserNameChange}
        />
           
      
           <TextField
        label="Age"
        value={age}
        onChange={handleAgeChange}
        error={isNaN(age)}
        helperText={isNaN(age) ? "Incorrect entry. Please enter a number." : ""}
      />

        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
      
        <TextField
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          error={isNaN(phone)}
        helperText={isNaN(phone) ? "Incorrect entry. Please enter a number." : ""}
      />
      
      
        <TextField
          label="Access"
          value={access}
          onChange={handleAccessChange}
        />
        </Box>
      </Box>
     <Button disabled={!isValid} sx={{width:"fit-content",margin:(isMediumScreen) ? "0 auto" : " 0 auto"}} onClick={handleAddUser} variant='contained'>Add user</Button>
  
    </Box>
  );
  } else{
  
    return (
      <Box sx={{
        width:"100%",
        justifyContent:"center",
        display: "flex",
        flexDirection :"column",
        }}>
      <Box  sx={{
          width:"100%",
          justifyContent:"center",
          display: "flex",
          flexWrap : "wrap",
          padding: "0.5em 3em",
          gap:"1em",
          flexDirection: (isMediumScreen) ? "column" : "row"
      }}>
         <TextField
          label="Name"
          value={userName}
          onChange={handleUserNameChange}
        />
           
      
           <TextField
        label="Age"
        value={age}
        onChange={handleAgeChange}
        error={isNaN(age)}
        helperText={isNaN(age) ? "Incorrect entry. Please enter a number." : ""}
      />

        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
      
        <TextField
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          error={isNaN(phone)}
        helperText={isNaN(phone) ? "Incorrect entry. Please enter a number." : ""}
      />
      
      
        <TextField
          label="Access"
          value={access}
          onChange={handleAccessChange}
        />
        </Box>
        <Button disabled={!isValid} sx={{width:"fit-content",margin:"auto"}} onClick={handleAddUser} variant='contained'>Add user</Button>
      
      </Box>
    )
  }
} 

export default AddUser;