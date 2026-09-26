import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Chat from './Components/Chat'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Chat />
        <Footer />
    </>
  )
}

export default Layout