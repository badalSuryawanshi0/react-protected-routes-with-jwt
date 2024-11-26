import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import  Signup  from './Components/Signup/Signup.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/About.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Protected from './Protected.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import  Dashboard  from './Components/Dashboard/Dashboard.jsx'


const route=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/dashboard' element={<Protected Component={Dashboard} />} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
  </Route>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContextProvider>
   <RouterProvider router={route}/>
   </AuthContextProvider>
   
   
  </StrictMode>,
)
