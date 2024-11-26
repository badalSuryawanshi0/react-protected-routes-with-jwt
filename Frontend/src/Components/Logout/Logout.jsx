import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
    const {setAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout = async () => {
        try {
          
            
          await axios.post('/api/logout'); // Call backend to clear token
          
          setAuth(false); // Clear auth state
          navigate('/signin'); // Redirect to signin
        } catch (error) {
            console.log("hey error from logout");
            
          console.error('Error while logging out:', error);
        }
      };
  
  return (
    <div >
     <button className='text-black hover:text-blue-500' onClick={handleLogout} >Logout</button>
  
    </div>
  )
}

export default Logout;
