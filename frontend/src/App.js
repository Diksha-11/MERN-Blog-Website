import './App.css';
import Header from './components/Header';
import React, { useEffect } from 'react';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Blogs from './components/Blogs';
import UserBlog from './components/UserBlog';
import BlogDetail from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { authActions } from './store';


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn );
  console.log(isLoggedIn);
  useEffect(() =>{

    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  },[dispatch])
  return (
    <>
      <Header>
        <Header />
      </Header>
     
      <main>
        <Routes>
        <Route path="/" element={<Home />} />  
           {!isLoggedIn ?  <> <Route path="/" element={<Home />} />   <Route path="/auth" element={<Auth />} /> </> :
        <>  
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlog />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </>}
        </Routes>
      </main>

   

    </>

  );
}

export default App;
