import React from 'react'
import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/NavBar'

const AuthenticatedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AuthenticatedLayout
