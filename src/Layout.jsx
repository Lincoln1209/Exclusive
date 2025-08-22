import React from 'react'
import { Outlet } from 'react-router'
import Header from './Component/Header'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout