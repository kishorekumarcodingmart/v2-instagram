import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Pages/Feed'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Message from '../Pages/Message'
import Explore from '../Pages/Explore'
import Account from '../Pages/Account'
import Activity from '../Pages/Activity'
import Setting from '../Pages/Setting'
import PostSlider from '../Components/PostSlider/PostSlider'



function Index() {

  const settingsArr = ['/accounts/edit/','/accounts/password/change/','/accounts/manage_access/','/emails/settings/','/push/web/settings/','/accounts/contact_history/','/accounts/privacy_and_security/','/accounts/supervision/','/session/login_activity/','/emails/emails_sent/','/settings/help/']
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='' element={<Feed />} />
            <Route path='/account' element={<Account />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/message' element={<Message />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/test' element={<PostSlider/>} />
            {
              settingsArr.map((val,index)=>{
                return (<Route key={index} path={val} element={<Setting />} />)
              })
            }
        </Routes>
    </>
  )
}

export default Index