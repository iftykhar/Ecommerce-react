import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'; 

const RootLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
    
  )
}

export default RootLayout
