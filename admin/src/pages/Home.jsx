import React from 'react'
import Nav from '../components/Nav.jsx'
import Sidebar from '../components/Sidebar.jsx'

function Home() {
  return (
    <div className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <Nav/>  
      <Sidebar/>
    </div>
  )
}

export default Home