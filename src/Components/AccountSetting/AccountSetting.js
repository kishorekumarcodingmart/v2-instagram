import React from 'react'
import './AccountSetting.css'
import {MetaSection} from '../../Utils/NavbarButton'
import LoginSignupFooter from '../LoginSignupFooter/LoginSignupFooter'
import EditProfile from '../AllSetting/EditProfile/EditProfile'


const SettingOption = ["Edit Profile","Change password","Apps and websites", "Email notifications","Push notifications", "Manage contacts","Privacy and security", "Login activity", "Emails from Instagram", "Help","Digital collectibles"]


function AccountSetting() {
  return (
    <>
        <section className='SettingWrapper flex justify-content-center align-item-center'>
            <div className='SettingWrapperComp flex mt-4'>
                <div className='SettingsTitle'>
                    {
                        SettingOption.map((val,index)=>{
                            return (
                                <div className='' key={index}>
                                    <div className='individualSetting w-100 p-3'>{val}</div>
                                </div>
                            )
                        })
                    }
                    <div className='w-100 p-3 ProfessionalAccount fw-bold pb-5'>Switch to Professional Account</div>
                    <div className='metaSection p-3'>
                        <MetaSection />
                        <h3 className='AccountCenter px-2'>Accounts Centre</h3>
                        <p className='text-gray'>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing, and logging in.</p>
                    </div>
                </div>
                <div className='SettingTabs'>
                    <EditProfile />
                </div>
            </div>
        </section>
        <LoginSignupFooter />
    </>
  )
}

export default AccountSetting