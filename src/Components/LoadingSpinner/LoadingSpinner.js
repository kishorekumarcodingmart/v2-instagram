import React from 'react'
import './LoadingSpinner.css'

function LoadingSpinner() {
  return (
    <section className='load'>
        <div class="lds-spinner">
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div>
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
        </div>
    </section>
  )
}

export default LoadingSpinner