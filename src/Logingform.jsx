import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';

const Logingform = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [entry,setEntry]=useState([]);

    const submitForm=(e)=>{
      e.preventDefault();
      const newEntry={email:email,password:password};
      setEntry([...entry,newEntry]);
    }
  return (
    <><div className='container'>
    <form onSubmit={submitForm}>
    <h3>LOGIN</h3>
        <div>
        <label htmlFor='email'>Email:</label>
        <TextField required id="outlined-required" label="Required" defaultValue="Enter your name" value={email}
         onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <br/>
        <div>
        <label htmlFor='password'>Password:</label>
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        </div><br/>
      
        <Button type='submit' color="warning" variant="contained" >LOGIN<LoginIcon/></Button>
        </form>
        </div>
    </>
  )
}
export default Logingform;