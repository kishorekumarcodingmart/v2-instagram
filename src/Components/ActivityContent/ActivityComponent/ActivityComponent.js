import React from 'react'
import './ActivityComponent.css'
import Input from '../../Input/Input'

function ActivityComponent() {
  return (
    <section className=''>
        <div className='FollowReq mt-3 flex justify-content-between align-items-center '>
                <div className='mt-1 ml-2 flex justify-content-center align-items-center'>
                    <div><img className='ActivityImg' src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="img" /></div>
                    <div className='detailsA flex ml-2'>
                        <h4 className='mr-1'>fifi_______x</h4>
                        <span className='mr-1'>started following you.</span>
                        <p>15 min</p>
                    </div>
                </div>
                <div className=''>
                    <Input type="button" value="Follow" className="followBtn m-1 p-1"/>
                </div>
            </div>
    </section>
  )
}

export default ActivityComponent

