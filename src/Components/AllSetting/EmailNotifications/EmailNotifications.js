import React from 'react'
import CustomRadioButton from '../../CustomRadioButton/CustomRadioButton'

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
                            <div className='my-2'>
                                <CustomRadioButton val="Off" name={val}/>
                            </div>
                            <div className='my-3'>
                                <CustomRadioButton val="On" name={val}/>
                            </div>
                        </div>
                    )
                })
            }
            
        </section>
    </>
  )
}

export default EmailNotifications