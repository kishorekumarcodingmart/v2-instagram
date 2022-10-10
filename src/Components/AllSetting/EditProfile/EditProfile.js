import React from 'react'
import './EditProfile.css'
import Input from '../../Input/Input'


function EditProfile() {
  return (
    <>
        <section className='EditProfileWrapper flex flex-col justify-content-center'>
            <table>
                <tbody>
                    <tr>
                        <td className='text-right'><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="profilePicSetting" alt="dp" /></td>
                        <td>
                            <div className='fw-bold'>mrkishorekumar</div>
                            <div className='colorBlue pt-1'>Change profile photo</div>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Name</td>
                        <td>
                            <Input type="text" placeholder="Name" className="p-2" />
                            <div className='help'>Help people discover your account by using the name that you're known by: either your full name, nickname or business name.</div>
                            <div className='help'>You can only change your name twice within 14 days.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>UserName</td>
                        <td>
                            <Input type="text" placeholder="UserName" className="p-2" />
                            <div className='help'>In most cases, you'll be able to change your username back to mrkishorekumar for another 14 days.<div className='colorBlue'>Learn more.</div></div>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Website</td>
                        <td>
                            <Input type="text" placeholder="Website" className="p-2" />
                            <div className='help'>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Bio</td>
                        <td>
                            <Input type="text" placeholder="Bio" className="p-2" />
                            <div className='help'>0 / 150</div>
                            <div className='help fw-bold'>Personal information</div>
                            <div className='help'>Provide your personal information, even if the account is used for a business, pet or something else. This won't be part of your public profile.</div>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Email</td>
                        <td>
                            <Input type="text" placeholder="Email address" className="p-2" />
                            <button className='p-2 mt-2'>Confirm Email Address</button>
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Phone</td>
                        <td>
                            <Input type="text" placeholder="Phone number" className="p-2" />
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold flex justify-content-end'>Gender</td>
                        <td>
                            <Input type="text" placeholder="Gender" className="p-2" />
                        </td>
                    </tr>
                    <tr>
                        <td className='fw-bold text-right'>Similar account suggestions</td>
                        <td>
                            <Input type="checkbox" placeholder="Gender" className="suggestionsBox p-2" />
                            <div className='suggestionsBoxtext'>Include your account when recommending similar accounts that people might want to follow.</div>
                        </td>
                    </tr>
                    <tr>
                        <td><button className='p-2'>Sumbit</button></td>
                        <td className='fw-bold colorBlue'>Temporarily deactivate my account</td>
                    </tr>
                </tbody>
            </table>
            
        </section>
    </>
  )
}

export default EditProfile