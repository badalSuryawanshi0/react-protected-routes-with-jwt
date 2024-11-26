import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from './Components/AppBar2.jsx/AppBar'

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AppBar/>
      <Outlet/>
      
    </div>
  );
}

export default Layout
