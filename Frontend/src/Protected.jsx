import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AuthContext from './Context/AuthContext';

  function Protected(props) {
    const navigate = useNavigate();
  const { Component } = props;
  
   const {auth,setAuth}=useContext(AuthContext);

  useEffect(() => {
    // Check authentication status
   const checkAuthStatus= async()=>
    {

    
   try {
    //axios.defaults.withCredentials = true;
    await axios.get('api/dashboard');
    setAuth(true);
    navigate('/dashboard')
    
   } catch (error) {
    setAuth(false);
    navigate('/signup')
  
   }
  };
 checkAuthStatus();
    
  }, [navigate,setAuth]);

  if(!auth)
  {
   navigate('/signin');
  }
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
