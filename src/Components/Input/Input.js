import React from 'react'

function Input({type, name, placeholder, className, value, onChange, id, checked}) {
  return (
    <>
      {
        <input 
          checked = {checked}
          id={id}
          onChange={onChange}
          type={type} 
          name={name} 
          placeholder={placeholder} 
          className={className} 
          value={value}
          defaultChecked
        /> 
      }
    </>
  )
}

export default Input