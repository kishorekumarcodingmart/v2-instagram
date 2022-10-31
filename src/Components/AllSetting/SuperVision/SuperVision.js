import React, { Component } from 'react'
import {UpArrowIcon} from '../../../Utils/NavbarButton' 

export default class SuperVision extends Component {
  render() {
    return (
      <>
          <section className='SuperVisionWapper mx-10'>
                <div><h2>Supervision</h2></div>
                <div className='flex justify-content-between my-2'>
                    <div>Family Centre</div>
                    <div style={{transform : "rotate(90deg)"}}><UpArrowIcon /></div>
                </div>
                <div className='flex justify-content-between my-2'>
                    <div>Education Hub</div>
                    <div style={{transform : "rotate(90deg)"}}><UpArrowIcon /></div>
                </div>
          </section>
      </>
    )
  }
}
