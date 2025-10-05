import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import LandingPage from '../components/LandingPage'

function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      
    </div>
  )
}

export default Home
