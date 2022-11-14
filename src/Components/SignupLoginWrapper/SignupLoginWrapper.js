import React from 'react'
import './SignupLoginWrapper.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function SignupLoginWrapper({query,linkname,link}) {
  const theme = useSelector((state)=>state.theme.data.dark)

  return (
    <>
        <div className={theme?"drak-head drak-border SignupLoginWrapper p-1 mt-3 flex flex-row justify-content-center align-items-center":"SignupLoginWrapper p-1 mt-3 flex flex-row justify-content-center align-items-center"}>
          <div className="m-1">
            <p className="mb-0">{query}</p>
          </div>
          <div className="m-1">
            <Link className='link-signupLogin' to={link} >{linkname}</Link>
          </div>
        </div>
    </>
  )
}

export default SignupLoginWrapper