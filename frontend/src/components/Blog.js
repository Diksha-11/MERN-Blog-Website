import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, IconButton } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Blog = ({title, description, imageURL, userName, isUser, id}) =>{

  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`) ;
  };

  const deleteRequest = async() => {
    const res = await axios
    .delete(`http://localhost:5000/api/blog/${id}`)
    .catch((err) => console.log(err));

    const data =await res.data;
    return data;

  }
  const handleDelete = (e) => {
    deleteRequest()
    .then(() => navigate("/"))
    .then(() => navigate("/blogs"))
    .then((err) => console.log(err))
  };

  console.log(title,isUser);




  return (<>
    <Card sx={{ width:"75%" , margin:"auto",mt:2, padding:2,boxShadow:"5px 5px 10px #ccc", ":hover":{
      boxShadow:"10px 10px 20px #ccc"
  }}}>
  
  {isUser && (
         <Box display='flex'>
           <IconButton onClick={handleEdit}  sx={{ marginLeft:"auto"}}><ModeEditOutlineIcon color="warming"/></IconButton>
           <IconButton onClick={handleDelete}   ><DeleteOutlineIcon color="error"/></IconButton>
         </Box>
      )
  
      }


<CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName.charAt(0)}
          </Avatar>
        }
        title={ <h1 style={{color:"gray"}}>{title}</h1> }
        subheader=""
        
      />
      <CardActionArea >
        <CardMedia
          component="img"
          height="250"
          image={imageURL}
          alt="Image"
        />

       
        <CardContent> <hr /><br />
          <Typography gutterBottom variant="h6" component="div">
            <b>{ userName }</b>{": "} {description}
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
           By {userName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='body2' sx={{  color:"black"}}>
          Share
        </Button>
      </CardActions>
    </Card></>
  );
    }
  export default Blog;








  /*return (<div>
    <Card sx={{ width:"75%" , margin:"auto",mt:2, padding:2,boxShadow:"5px 5px 10px #ccc", ":hover":{
          boxShadow:"10px 10px 20px #ccc"
    }}}>

    {isUser && (
       <Box display='flex'>
         <IconButton onClick={handleEdit} sx={{ marginLeft:"auto"}}><ModeEditOutlineIcon /></IconButton>
         <IconButton onClick={handleDelete} ><DeleteOutlineIcon /></IconButton>
       </Box>
    )

    }

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{ userName }</b>{": "} {description}
        </Typography>
      </CardContent>
      
    </Card></div>
  );
}*/


