import React from 'react'
import { Link } from 'react-router-dom'
import './AccountSetting.css'
import {MetaSection} from '../../Utils/NavbarButton'
import LoginSignupFooter from '../LoginSignupFooter/LoginSignupFooter'
import EditProfile from '../AllSetting/EditProfile/EditProfile'
import ChangePassword from '../AllSetting/ChangePassword/ChangePassword'
import AppsAndWebsites from '../AllSetting/AppsAndWebsites/AppsAndWebsites'
import EmailNotifications from '../AllSetting/EmailNotifications/EmailNotifications'
import PushNotifications from '../AllSetting/PushNotifications/PushNotifications'
import ManageContacts from '../AllSetting/ManageContacts/ManageContacts'
import SuperVision from '../AllSetting/SuperVision/SuperVision'
import EmailsFromInstagram from '../AllSetting/EmailsFromInstagram/EmailsFromInstagram'
import Help from '../AllSetting/Help/Help'

const SettingOption = [
    {
        PageName : "Edit Profile",
        path : "/accounts/edit/"
    },
    {
        PageName : "Change password",
        path : "/accounts/password/change/"
    },
    {
        PageName : "Apps and websites",
        path : "/accounts/manage_access/"
    },
    {
        PageName : "Email notifications",
        path : "/emails/settings/"
    },
    {
        PageName : "Push notifications",
        path : "/push/web/settings/"
    },
    {
        PageName : "Manage contacts",
        path : "/accounts/contact_history/"
    },
    {
        PageName : "Privacy and security",
        path : "/accounts/privacy_and_security/"
    },
    {
        PageName : "Super Vision",
        path : "/accounts/supervision/"
    },
    {
        PageName : "Login activity",
        path : "/session/login_activity/"
    },
    {
        PageName :  "Emails from Instagram",
        path : "/emails/emails_sent/"
    },
    {
        PageName : "Help",
        path : "/settings/help/"
    }
]

const settingLayout = () => {
    if (window.location.pathname==="/accounts/edit/"){
        return (<EditProfile />)
    }
    else if(window.location.pathname==="/accounts/password/change/") {
        return (<ChangePassword />)
    }

    else if(window.location.pathname==="/accounts/manage_access/") {
        return (<AppsAndWebsites />)
    }

    else if(window.location.pathname==="/emails/settings/") {
        return (<EmailNotifications />)
    }

    else if(window.location.pathname==="/push/web/settings/") {
        return (<PushNotifications />)
    }

    else if(window.location.pathname==="/accounts/contact_history/") {
        return (<ManageContacts />)
    }

    else if(window.location.pathname==="/accounts/supervision/") {
        return (<SuperVision />)
    }

    else if(window.location.pathname==="/emails/emails_sent/") {
        return (<EmailsFromInstagram />)
    }

    else if(window.location.pathname==="/settings/help/") {
        return (<Help />)
    }
}

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
                                    <div className='individualSetting w-100 p-3'><Link className='link' to={val.path}>{val.PageName}</Link></div>
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
                    {settingLayout()}
                </div>
            </div>
        </section>
        <LoginSignupFooter />
    </>
  )
}

export default AccountSetting