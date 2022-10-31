import React, { Component } from 'react'
import {UpArrowIcon} from '../../../Utils/NavbarButton' 


export default class Help extends Component {
  render() {
    return (
      <section className='mx-10'>
        <div><h2>Help</h2></div>
                <div className='flex justify-content-between my-2'>
                    <div>Help Centre</div>
                    <div style={{transform : "rotate(90deg)"}}><UpArrowIcon /></div>
                </div>
                <div className='flex justify-content-between my-2'>
                    <div>Privacy and security help</div>
                    <div style={{transform : "rotate(90deg)"}}><UpArrowIcon /></div>
                </div>
                <div className='flex justify-content-between my-2'>
                    <div>Support Requests</div>
                    <div style={{transform : "rotate(90deg)"}}><UpArrowIcon /></div>
                </div>
      </section>
    )
  }
}
