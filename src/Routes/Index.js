import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Pages/Feed'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Signup from '../Pages/Signup'

function Index() {
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='' element={<Feed />} />
        </Routes>
    </>
  )
}

export default Index