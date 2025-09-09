import React, { useContext } from 'react'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './pages/Login'
import Home from './pages/Home'  
import { Routes, Route } from 'react-router-dom'
import { adminDataContext } from './context/AdminContext'

function App() {
  let adminData = useContext(adminDataContext)
  return (
    <>
    {!adminData ? <Login/> : <>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </> }
    </>
  )
}

export default App
