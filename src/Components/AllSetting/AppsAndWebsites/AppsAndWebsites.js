import React from 'react'
import Input from '../../Input/Input'
import './AppsAndWebsites.css'

function AppsAndWebsites() {
  return (
    <>
        <h3 className='titleApps'>Apps and websites</h3>
        <div className="mytabs">
            <Input type="radio" id="tabfree" name="mytabs"  />
		    <label htmlFor="tabfree">Active</label>
            <div className="tab">
                <p>These are apps and websites that you've connected to your Instagram account. They can access non-public
                    information that you choose to share with them.</p>
        </div>
            <Input type="radio" id="tabsilver" name="mytabs" />
            <label htmlFor="tabsilver">Expired</label>
            <div className="tab">
                <p>These are apps and websites that you've connected to your Instagram account that you may not have used in
                    the last 90 days. They're no longer able to access your non-public information, but they may still have
                    the information that you shared while they were active. "Non-public" means information that an app can
                    only access if you choose to share it when you log in with your Instagram account (such as your email
                    address).
                </p>
            </div>
            <Input type="radio" id="tabgold" name="mytabs"  />
            <label htmlFor="tabgold">Removed</label>
            <div className="tab">
                <p>These are apps and websites that are no longer connected to your Instagram account. They can no longer
                    access your non-public information, but may still have the information that you shared while they were
                    active. "Non-public" means information that an app can only access if you choose to share it when you
                    log in with your Instagram account (such as your email address). You can ask an app to delete your
                    information. To do it, review their Privacy Policy for details and contact information. If you contact
                    an app, they may need your user ID.</p>
            </div>
	    </div>
    </>
  )
}

export default AppsAndWebsites