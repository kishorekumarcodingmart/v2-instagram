import React from 'react'
import './LoginSignupFooter.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { footerLinkList } from '../../Utils/Const'

function LoginSignupFooter() {
  const theme = useSelector((state)=>state.theme.data.dark)

  return (
    <>
        <footer className={theme?"drak-body flex flex-col justify-content-center pt-2 pb-5 footer":"flex flex-col justify-content-center pt-2 pb-5 footer"}>

            <div className='flex flex-wrap flex-row justify-content-center align-items-center'>
                {
                    Object.keys(footerLinkList).map(res=>{
                        return <Link className='m-2 links' key={res} to={{pathname : footerLinkList[res]}} target="_blank">{res}</Link>
                    })
                }
            </div>
            <div className='flex flex-row justify-content-center align-items-center m-1 links'>
                <div className='flex flex-row justify-content-center align-items-center'>
                    <div className='m-1'>
                        English (UK)
                    </div>
                    <select className='m-1 selectBtn'>
                        <option></option>
                        {/* <option>தமிழ்</option>
                        <option>English (UK)</option>
                        <option>हिन्दी</option>
                        <option>日本語</option>   */}
                    </select>
                </div>
                <div>
                    &#169; {new Date().getFullYear()} Instagram from Meta
                </div>
            </div>
         </footer>
    </>
  )
}

export default LoginSignupFooter