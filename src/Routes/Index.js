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
import ResetPassword from '../Pages/ResetPassword'

function Index() {

  const settingsArr = ['/accounts/edit/','/accounts/password/change/','/accounts/manage_access/','/emails/settings/','/push/web/settings/','/accounts/contact_history/','/accounts/privacy_and_security/','/accounts/supervision/','/session/login_activity/','/emails/emails_sent/','/settings/help/']
  
  const Router = [
    {
      path : "/login",
      component : <Login />,
    },
    {
      path : "/signup",
      component : <Signup />,
    },
    {
      path : "",
      component : <Feed />,
    },
    {
      path : "/account",
      component : <Account />,
    },
    {
      path : "/explore",
      component : <Explore />,
    },
    {
      path : "/message",
      component : <Message />,
    },
    {
      path : "/activity",
      component : <Activity />,
    },
    {
      path : "/accounts/login",
      component : <ResetPassword />,
    },
     
  ]
  
  return (
    <>
        <Routes>
            {
              Router.map((val,index)=>{
                return (<Route key={index} path={val.path} element={val.component} /> )
              })
            }
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