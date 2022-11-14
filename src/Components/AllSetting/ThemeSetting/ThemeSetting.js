import React from 'react'
import { useDispatch } from "react-redux";
import {addtheme} from '../../../Features/dark'


function ThemeSetting() {
  
  const dispatch = useDispatch()

  const handleChange = (val) => {
    dispatch(addtheme({
      dark : val
    }))
  }

  return (
    <section className='flex flex-col justify-content-center w-100'>
        <div className='flex justify-content-between w-70 mx-auto '>
            <div><h4>Drak</h4></div>
            <div><input type="radio" name='theme' onClick={()=>handleChange(true)}/></div>
        </div>
        <div className='flex justify-content-between w-70 mt-3 mx-auto '>
            <div><h4>Light</h4></div>
            <div><input type="radio" name='theme' onClick={()=>handleChange(false)} defaultChecked/></div>
        </div>
    </section>
  )
}

export default ThemeSetting