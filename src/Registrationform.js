import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Registrationform = () => {
    const [details,setDetails]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:8080/register/',details).then((response)=>{
          console.log(response)
          alert(response.data);
        }).catch((error)=>{
            alert(error);
          })
    }
  return (
    <>
        <form className='col-md-6 mx-auto h-100 d-flex flex-column justify-content-center' onSubmit={handleSubmit}>

        <TextField className='col-12 my-3' required id="username" label="Enter name" placeholder='Enter your name' value={details.username} onChange={(e)=>setDetails({...details,name:e.target.value})} name="name" />
 
        <TextField className='col-12 my-3' required id="email" label="Enter email" placeholder="Enter your email" value={details.email} onChange={(e)=>setDetails({...details,email:e.target.value})} name="email"/>
 
        <TextField className='col-12 my-3'  required id="phone" label="Enter phone" placeholder="Enter your phone number" value={details.phone} onChange={(e)=>setDetails({...details,phone:e.target.value})} name="phone" />
        
        <TextField className='col-12 my-3' required id="password" label="Enter Password" type="password" autoComplete="current-password" value={details.password} onChange={(e)=>setDetails({...details,password:e.target.value})} name="password"/>
     
        <Button className="col-6 mx-auto" type='submit' color="primary" variant="contained" >REGISTER<AppRegistrationIcon/></Button>
        </form>
    </>
  )
}

export default Registrationform;