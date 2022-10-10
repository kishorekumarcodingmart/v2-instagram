import React from 'react'
import './ChangePassword.css'
import Input from '../../Input/Input'


function ChangePassword() {
  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td className='text-right'><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="profilePicSetting" alt="dp" /></td>
                    <td><h3>mrkishorekumar</h3></td>
                </tr>
                <tr>
                    <td className='text-right'><h3>Old password</h3></td>
                    <td><Input type="text" placeholder="Old password" className="input" /></td>
                </tr>
                <tr>
                    <td className='text-right'><h3>New password</h3></td>
                    <td><Input type="text" placeholder="New password" className="input" /></td>
                </tr>
                <tr>
                    <td className='text-right'><h3>Confirm New password</h3></td>
                    <td><Input type="text" placeholder="Confirm New password" className="input" /></td>
                </tr>
                <tr>
                    <td><button className='SubmitBtn p-2'>Submit</button></td>
                    <td><p className='colorBlue fw-bold'>Forgotten password?</p></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ChangePassword