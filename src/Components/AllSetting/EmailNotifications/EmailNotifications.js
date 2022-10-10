import React from 'react'
import Input from '../../Input/Input'
import './EmailNotifications.css'

const SettingEmailNotifications = ["Feedback emails","Reminder emails","Product emails","News emails","Support emails"]

function EmailNotifications() {
  return (
    <>
        <section className='mt-3 w-100 ml-3'>
            {
                SettingEmailNotifications.map((val,index)=>{
                    return (
                        <div className='my-4' key={index}>
                            <h4>{val}</h4>
                            <Input name={val} type="radio" className="mr-2 mt-3"/>
                            <label className="mr-2">Off</label>
                            <Input name={val} type="radio" className="mr-2 mt-3" defaultChecked/>
                            <label>On</label>
                        </div>
                    )
                })
            }
            
        </section>
    </>
  )
}

export default EmailNotifications