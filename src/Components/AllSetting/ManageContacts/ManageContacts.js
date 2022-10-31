import React, { Component } from 'react'
import './ManageContacts.css'

export default class ManageContacts extends Component {
  render() {
    return (
      <>
        <section className='ManageContactsWrapper mx-10' >
            <div className='mb-3'><h3>Manage contacts</h3></div>
            <div className='mb-3'><p>The people listed here are contacts that you've uploaded to Instagram. To remove your synced contacts, tap Delete All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device settings and turn off access to contacts.</p></div>
            <div className='mb-3'><p>Only you can see your contacts, but Instagram uses the information you've uploaded about your contacts to make friend suggestions for you and others and to provide a better experience for everyone.</p></div>
            <div className='flex justify-content-between align-items-center mt-3'>
                <div><h4>0 synced contacts</h4></div>
                <div><h4 style={{color : "#b3dffc"}}>Delete All</h4></div>
            </div>
            <div className='mb-3'><div className='line-100'></div></div>
            <div  className='mb-3'><p>When you upload your contacts to Instagram, you'll see them here.</p></div>
            <div className='mb-3'><div className='line-100'></div></div>
            <div><button className='p-2' style={{opacity : "0.4"}}>Delete All</button></div>
        </section>
      </>
    )
  }
}
