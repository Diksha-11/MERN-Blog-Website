import React, { useState } from "react";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const label = {mb:1, mt:2, fontSize:'24px', fontWeight:'bold'}

const AddBlog = () =>{
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title:"", description:"", imageURL:"",
    });
    const handleChange=(e)=>{
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    }
    const sendRequest =async () => {
    
        const res = await axios
        .post("http://localhost:5000/api/blog/add" , {
            title:inputs.title,
            description: inputs.description,
            image: inputs.imageURL,
            user: localStorage.getItem("userId"),
            })
            .catch((err)=>console.log(err));

            const data = await res.data;
            return  data;
    };
    
    const handleSubmit=(e)=>{
     
       e.preventDefault();
       sendRequest().then(() => navigate("/blogs"))
       
       .then((data)=>console.log(data));
    }
    return(
        <div>

            <form onSubmit={handleSubmit}>
                <Box border={3} borderColor="#049ac8" borderRadius={4} boxShadow="10px 10px 20px #ccc" sx={{ backgroundColor:"white"}}
                  padding={2} margin={"auto"} marginTop={3} display='flex' flexDirection={'column'} width={"70%"} justifyContent={'center'}
                >
                    <Typography fontWeight={'bold'}
                      padding={3} color="#696969" variant="h4" textAlign={'center'} fontFamily={"  'Lobster', cursive,'Montserrat', sans-serif ,'Oleo Script Swash Caps', cursive"}
                    >Post Your Blogs</Typography>

                    <InputLabel sx={label} >Title</InputLabel>
                    <TextField name="title"onChange={handleChange} value={inputs.title}  />

                    <InputLabel sx={label} >Description</InputLabel>
                    <TextField name="description"onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />

                    <InputLabel sx={label} >Image URL</InputLabel>
                    <TextField name="imageURL"onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined"/>

                    <Button  sx={{mt:2, }}  variant="contained" type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
}

export default AddBlog;