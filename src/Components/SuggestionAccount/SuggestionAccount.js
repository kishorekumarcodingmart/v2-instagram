import React from 'react'
import LazyLoading from '../LazyLoading/LazyLoading'
import './SuggestionAccount.css'

function SuggestionAccount({profilePhoto,name,userName ,loading}) {
  return (
    <>
        <div className="profile-details">
            <div className="username-name-profile">
                {
                  (loading)?<LazyLoading classN="suggestion-section-photo-Lazy"/>:(<div className="suggestion-section-photo-suggestion"><img src={profilePhoto} alt="img" /></div>)
                }
                
                <div className="username-name">
                  {
                    (loading)?(<>
                        <LazyLoading classN="lazySuggestionUsername"/>
                        <LazyLoading classN="lazySuggestionName"/>
                      </>):(
                      <>
                        <h5>{userName}</h5>
                        <p className='lowercase'>{name}</p>
                      </>
                    )
                  }
                    
                </div>
            </div>
            {
              (loading)?null :<div className="follow">Follow</div>
            }
            
        </div>
    </>
  )
}

export default SuggestionAccount