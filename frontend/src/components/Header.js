import React, { useState } from "react";
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";


const Header = () => {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn );
    const [value, setValue] = useState();
    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: "#049ac8" }} >
                <Toolbar>
                    <Button fontFamily={`"Roboto", "Helvetica", "Arial", sans-serif`} LinkComponent={Link} to="/" sx={{ color: "white", fontSize:"20px", fontFamily:"Montserrat, sans-serif"}}>BlogSite</Button>

                    <Box style={{ display: "flex", marginLeft: "auto" }}>
                        { !isLoggedIn && <><Button LinkComponent={Link} to="/auth"  variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Signup</Button>
                        <Button LinkComponent={Link} to="/auth" variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Login</Button>
                         </>}
                       { isLoggedIn && <Button 
                        onClick={()=>dispath(authActions.logout())}
                         LinkComponent={Link} to="/auth" variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Logout</Button>}
                    </Box>
                </Toolbar>
            </AppBar>

            { isLoggedIn && 
            <Box position="sticky" 
             sx={{ display: "flex", marginLeft: "auto", marginRight: "auto", justifyContent: "center" }}>
                <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
                    <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs"></Tab>
                </Tabs>
            </Box>}

        </>
    )
}

export default Header;
//LinkComponent={Link} to="/blogs"


/*
import React, { useState } from "react";
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {

    const [value, setValue] = useState();
    return (<>
        <AppBar position="sticky" style={{ backgroundColor: "#049ac8"}}  >
            <Toolbar>
                <Typography variant="h5">
                    BlogApp
                </Typography>
               
                <Box style={{ display: "flex", marginLeft: "auto" }} >
                <Button variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Login</Button>
                    <Button variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Sign</Button>   
                    <Button variant="contained" sx={{ color: "white", margin: 1, borderRadius: 10 }}>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Box position="sticky" sx={{ display: "flex", marginLeft: "auto", marginRight: "auto",  justifyContent:"center" }}>
        <Tabs textColor="inherit"  value={value} onChange={(e, val) => setValue(val)}>
            <Tab label="All Blogs" >All Blogs</Tab>
            <Tab label="My Blogs" >My Blogs</Tab>
            <Tab label="Edit My Blogs">All Blogs</Tab>
        </Tabs>
    </Box></>
    )
}

export default Header;*/