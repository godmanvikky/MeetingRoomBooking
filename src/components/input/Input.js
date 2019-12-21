import React from 'react'
import './input.css'
function FormInput({handleChange,...otherProps}){
    return(
        <input className='input-form' {...otherProps}></input>
    )
}
export default FormInput;