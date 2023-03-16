import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box, display } from '@mui/system';
function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [access, setAccess] = useState('');

  const handleAddUser = () => {
    const newUser = {
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

  return (
    <Box>
    <Box  sx={{
        width:"100%",
        justifyContent:"center",
        display: "flex",
        flexDirection :"column",
        padding: "1em",
        gap:"1em"
    }}>
        <TextField
          label="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      
      
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      
        <TextField
          label="Access"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        />
        <Button sx={{width:"fit-content",margin:"auto"}} onClick={handleAddUser} variant='contained'>Add user</Button>
      </Box>
        
    
    </Box>
  );
}

export default AddUser;