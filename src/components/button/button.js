import React from 'react'
import './button.css'
function Button({children,...otherProps}){
    return(
        <button className='btn' {...otherProps}>{children}</button>)
}
export default Button;