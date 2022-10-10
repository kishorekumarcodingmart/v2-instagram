import React from 'react'
import './EditProfile.css'
import Input from '../../Input/Input'

{/* <input 
          onChange={onChange}
          type={type} 
          name={name} 
          placeholder={placeholder} 
          className={className} 
          value={value}
        /> */}
function EditProfile() {
  return (
    <>
        <section className='EditProfileWrapper flex flex-col justify-content-center'>
            <table className='flex justify-content-center'>
                <tbody className='flex flex-col justify-content-center align-items-center '>
                    <tr className='flex gap-3'>
                        <td><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="profilePicSetting" alt="dp" /></td>
                        <td>
                            <div>mrkishorekumar</div>
                            <div className='colorBlue fw-bold'>Change profile photo</div>
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Name</td>
                        <td className='flex flex-col  '>
                            <Input type="text"   placeholder="Name" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Username</td>
                        <td className='flex flex-col  '>
                            <Input type="text" placeholder="Username" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Website</td>
                        <td className='flex flex-col  '>
                            <Input type="text" placeholder="Website" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Bio</td>
                        <td className='flex flex-col  '>
                            <Input type="text" placeholder="Bio" className="p-2" />
                        </td>
                    </tr>

                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Email address</td>
                        <td className='flex flex-col  '>
                            <Input type="text"   placeholder="Email address" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Phone number</td>
                        <td className='flex flex-col'>
                            <Input type="text" placeholder="Phone number" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Gender</td>
                        <td className='flex flex-col'>
                            <Input type="text" placeholder="Gender" className="p-2" />
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'>Similar account suggestions</td>
                        <td className=''>
                            <Input type="checkbox" placeholder="Bio" className="" />
                            <p>Include your account when recommending similar accounts that people might want to follow.</p>
                        </td>
                    </tr>
                    <tr className='flex  align-items-center gap-3'>
                        <td className='fw-bold'><button className='p-2'>Sumbit</button></td>
                        <td className='colorBlue fw-bold'>Temporarily Deactivate Your Account</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>
  )
}

export default EditProfile