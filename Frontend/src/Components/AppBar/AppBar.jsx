import React from "react";
import { NavLink,Link } from "react-router-dom";
import Logout from "../Logout/Logout";


const AppBar= ()=>
{
    return (
        <div className=" flex  justify-evenly bg-gradient-to-b from-pink-100 to-pink-300 via-pink-200 rounded-md  ">
        
          
          <div>
               <NavLink to='/home' className={({isActive})=> isActive ? 'text-blue-600' : 'text-black'}>
                Home
               </NavLink>
            
            </div>
          
            <div>
            <Link to='/contact'>
            Contact
            </Link>
            </div>
            <div>
            <NavLink to='/about' className={({isActive})=> isActive ? "text-blue-500" : "text-black"}>
                  About
                </NavLink>
            </div>
            <div>
            <NavLink to='/signin' className={({isActive})=> isActive ? "text-blue-500" : "text-black"}>
                  Signin
                </NavLink>
            
            </div>
            <div >
            <Logout/>
            
            </div>
        
        </div>
    )
}
export default AppBar;