import React from 'react'

function Input({type, name, placeholder, className, value, onChange}) {
  return (
    <>
      {
        <input 
          onChange={onChange}
          type={type} 
          name={name} 
          placeholder={placeholder} 
          className={className} 
          value={value}
        /> 
      }
    </>
  )
}

export default Input