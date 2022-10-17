import React from 'react'
import './SuggestionAccount.css'

function SuggestionAccount({profilePhoto,name,userName}) {
  return (
    <>
        <div className="profile-details">
            <div className="username-name-profile">
                <div className="suggestion-section-photo-suggestion"><img src={profilePhoto} alt="img" /></div>
                <div className="username-name">
                    <h5>{userName}</h5>
                    <p className='lowercase'>{name}</p>
                </div>
            </div>
            <div className="follow">Follow</div>
        </div>
    </>
  )
}

export default SuggestionAccount