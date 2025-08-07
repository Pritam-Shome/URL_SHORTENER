import React from 'react'
import { Outlet, useLocation } from '@tanstack/react-router'
import Navbar from './components/NavBar'

const RootLayout = () => {
  const location = useLocation()

  // Don't show navbar on landing page and auth page
  const hideNavbar = location.pathname === '/landing' || location.pathname === '/auth'

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  )
}

export default RootLayout