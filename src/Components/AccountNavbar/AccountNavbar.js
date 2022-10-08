import React from 'react'
import './AccountNavbar.css'
import {PostGrid, Tagged, Saved} from '../../Utils/NavbarButton'


function AccountNavbar() {
  return (
    <>
        <div className="desktop-only">
            <div className="tabs">
                <div className="tab-item active" style={{marginRight: "60px"}}>
                    <PostGrid />
                    <span>POSTS</span>
                </div>
                <div className="tab-item" style={{marginRight: "60px"}}>
                    <Tagged />
                    <span>IGTV</span>
                </div>
                <div className="tab-item">
                    <Saved />
                    <span>TAGGED</span>
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className="mobile-tabs mobile-only">

        <div className="actions">
          <PostGrid />
          <Tagged />
          <Saved />
        </div>
      </div>
    </>
  )
}

export default AccountNavbar