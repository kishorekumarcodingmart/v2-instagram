import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Pages/Feed'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Message from '../Pages/Message'
import Explore from '../Pages/Explore'
import Account from '../Pages/Account'



function Index() {
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='' element={<Feed />} />
            <Route path='/account' element={<Account />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/message' element={<Message />} />
        </Routes>
    </>
  )
}

export default Index