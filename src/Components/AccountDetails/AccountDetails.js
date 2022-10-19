import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AccountDetails.css'
import Input from '../Input/Input'
import {Setting} from '../../Utils/NavbarButton'
import IndividualStory from '../IndividualStory/IndividualStory'
import AccountNavbar from '../AccountNavbar/AccountNavbar'
import FollowersModel from '../FollowersModel/FollowersModel'
import FollowingModel from '../FollowingModel/FollowingModel'

function AccountDetails() {

  const [follwerModel, setFollwerModel] = useState("")

  const [followingModel, setFollowingModel] = useState("")

  const openModel = (e) => {
    setFollwerModel(e.current)
}   

  const openFollowingModel = (e) => {
    setFollowingModel(e.current)
  }

  return (
    <>
        <section className='AccountDetailsWrapper flex align-items-center'>
            <div className='AccountProfilePhoto'>
                <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="dp" />
            </div>
            <div className='AccountOtherDetails  flex flex-col'>
                <div className='flex m-2 align-items-center'>
                    <h2 className='mr-2'>mrkishorekumar</h2>
                    <div>
                        <Link to="/accounts/edit/"><Input type="button" value="Edit Profile" className="EditProfileBtn p-1 fw-bold mr-2" /></Link>
                    </div>
                    <div className='SettingIcon'><Link to="/accounts/edit/"><Setting /></Link></div>
                    
                </div>
                <div className='AccountLike flex justify-content-between m-2'>
                    <div className='flex p-2 align-items-center'><div className='fw-bold mr-1'>12</div>posts</div>
                    <div className='flex p-2 align-items-center hover' onClick={()=>{follwerModel.style.display = "flex"} }><div className='fw-bold mr-1'>12</div>followers</div>
                    <div className='flex align-items-center hover' onClick={()=>{followingModel.style.display = "flex"} }><div className='fw-bold mr-1'>12</div>following</div>
                </div>
                <div className='NameCap'>
                    <div className='m-2'><h4>M R Kishore Kumar</h4></div>
                    <div className='m-2'><p>Just because you're awake doesn't mean you should stop dreaming.</p></div>
                </div>
            </div>
        </section>
        <section className='MobileAccountNameDes flex flex-col'>
            <div className='p-2'><h4>M R kishore Kumar</h4></div>
            <div className='p-2'><p>Just because you're awake doesn't mean you should stop dreaming.</p></div>
        </section>
        <div className='MoblieAccountIndividualStory' >
            <div className='MoblieAccountIndividualStoryWrapper'>
                <IndividualStory img="https://instagram-clone-mrkishorekumar.netlify.app/img.png" username="mobile" />
            </div>
            <div className='MoblieAccountIndividualStoryWrapper'>
                <IndividualStory img="https://instagram-clone-mrkishorekumar.netlify.app/img.png" username="mobile" />
            </div>
        </div>
        <hr className='lineMD' />
        <section className='MobileLikeShareComment'>
            <div className='flex justify-content-between align-items-center'>
                <div className='flex p-2 align-items-center flex-col ml-1'><div className='fw-bold mr-1'>12</div>posts</div>
                <div className='flex p-2 align-items-center flex-col'  onClick={()=>{follwerModel.style.display = "flex"} } ><div className='fw-bold mr-1'>12</div>followers</div>
                <div className='flex align-items-center flex-col mr-1' onClick={()=>{followingModel.style.display = "flex"} }><div className='fw-bold mr-1'>12</div>following</div>
            </div>
            {/* <hr className='line-auto' /> */}
        </section>

        <div className='AccountIndividualStory'>
            <div className='AccountIndividualStoryWrapper'>
                <IndividualStory img="https://instagram-clone-mrkishorekumar.netlify.app/img.png" username="desktop" />
            </div>

            <div className='AccountIndividualStoryWrapper'>
                <IndividualStory img="https://instagram-clone-mrkishorekumar.netlify.app/img.png" username="desktop" />
            </div>
        </div>
        <AccountNavbar />
        <FollowersModel openModel={openModel}/>
        <FollowingModel openModel={openFollowingModel} />
    </>
  )
}

export default AccountDetails