import React from 'react'
import './AccountDetails.css'
import Input from '../Input/Input'
import {Setting} from '../../Utils/NavbarButton'


function AccountDetails() {
  return (
    <>
        <section className='AccountDetailsWrapper flex'>
            <div className='AccountProfilePhoto '>
                <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="dp" />
            </div>
            <div className='AccountOtherDetails  flex flex-col'>
                <div className='flex m-2 align-items-center'>
                    <h2 className='mr-2'>mrkishorekumar</h2>
                    <Input type="button" value="Edit Profile" className="EditProfileBtn p-1 fw-bold mr-2" />
                    <div className='SettingIcon'><Setting /></div>
                    
                </div>
                <div className='AccountLike flex justify-content-between m-2'>
                    <div className='flex p-2 align-items-center'><div className='fw-bold mr-1'>12</div>posts</div>
                    <div className='flex p-2 align-items-center'><div className='fw-bold mr-1'>12</div>followers</div>
                    <div className='flex align-items-center'><div className='fw-bold mr-1'>12</div>following</div>
                </div>
                <div className='NameCap'>
                    <div className='m-2'><h4>M R Kishore Kumar</h4></div>
                    <div className='m-2'><p>Hello!</p></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AccountDetails