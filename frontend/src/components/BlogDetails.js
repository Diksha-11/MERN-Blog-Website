import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const label = {mb:1, mt:2, fontSize:'24px', fontWeight:'bold'}

const BlogDetail = () => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);

    const [inputs, setInputs] = useState({
     
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const fatchDetails = async () => {
        const res = await axios.get(`http://localhost:5000/api/blog/${id}`)
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fatchDetails().then((data) => {
            setBlog(data.blog)
            setInputs({title:data.blog.title, description: data.blog.description})
        })
    }, [id]);

    const sendRequest = async () => {
        const res =await axios.put(`http://localhost:5000/api/blog/update/${id}` , {
            title: inputs.title,
            description: inputs.description,
        }).catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    console.log(blog);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        sendRequest().then((data) => console.log(data)).then(()=>navigate("/myBlogs/"));
    }

    return(
         <div>
{inputs && (
        <form onSubmit={handleSubmit}>
            <Box border={3} borderColor="#049ac8" borderRadius={4} boxShadow="10px 10px 20px #ccc" sx={{ backgroundColor: "white" }}
                padding={2} margin={"auto"} marginTop={3} display='flex' flexDirection={'column'} width={"70%"} justifyContent={'center'}
            >
                <Typography fontWeight={'bold'}
                    padding={3} color="#696969" variant="h5" textAlign={'center'}
                >Post Your Blogs</Typography>

                <InputLabel sx={label} >Title</InputLabel>
                <TextField name="title" onChange={handleChange} value={inputs.title} />

                <InputLabel sx={label} >Description</InputLabel>
                <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />

               
               {/* <InputLabel sx={label} >Image URL</InputLabel>  //Image URL Can't be change
                <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />*/}

                <Button sx={{ mt: 2, }} variant="contained" type="submit">Submit</Button>
            </Box>
        </form>
)}</div>);
};

export default BlogDetail;