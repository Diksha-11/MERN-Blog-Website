import React, { useState } from "react";
import {Box,Button,TextField,Typography} from '@mui/material';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Auth = () =>{
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [inputs, setInputs] = useState({
        name:"", email:"", password:""
    })
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };
    const sendRequest = async (type="login") =>{
        const res = await axios.post(`http://localhost:5000/api/user/${type}` , {
            name:inputs.name,
             email: inputs.email,
             password: inputs.password,
            }).catch((err)=>console.log(err));

            const data = await res.data;
            console.log(data);
            return  data;
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(inputs);
       if(isSignup){
            sendRequest("signup")
            .then((data)=>localStorage.setItem("userId",data.user._id))
            .then(()=>dispath(authActions.login())).then(()=>navigate("/blogs"))
            .then((data)=>console.log(data));
       }else{
           sendRequest()
           .then((data)=>localStorage.setItem("userId",data.user._id))
           .then(()=>dispath(authActions.login())).then(()=>navigate("/blogs"))
           .then((data)=>console.log(data));
       }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Box maxWidth={410} padding={3}   margin="auto"  marginTop={5} borderRadius={5} boxShadow="10px 10px 20px #ccc"
                style={{display : "flex", flexDirection:"column", alignItems:"center", justifyContent:"center",  backgroundColor:"white"}}>

                    <Typography variant="h3" padding={3} textAlign='center' fontFamily={"  'Lobster', cursive,'Montserrat', sans-serif ,'Oleo Script Swash Caps', cursive"}>{isSignup? "Signup":"Login"}</Typography>

                   {isSignup && <TextField name="name" onChange={handleChange} value={inputs.name} margin="normal" placeholder="Enter Name" />}
                    
                    <TextField name="email" onChange={handleChange} value={inputs.email}  margin="normal" type={'email'} placeholder="Enter Email" />
                    
                    <TextField name="password" onChange={handleChange} value={inputs.password}  margin="normal" type={'password'} placeholder="Enter Password"/>

                 

                    <Button type="submit" variant="contained" sx={{ marginTop:3,borderRadius: 3,color:"white" }}
                     >Submit</Button>
                    <Button onClick={()=>setIsSignup(!isSignup)}   sx={{ marginTop:3 }}>
                      {isSignup ? "Already have an Account? Login":"Not Registered yet? Signup"}</Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth;