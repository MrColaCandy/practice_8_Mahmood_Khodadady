import React from 'react'
import "./InputField.css"
const InputField = ({onChange=()=>{},onEnterPressed=()=>{}, value="", inputRef} ) => {
  return (
    <input onKeyUp={(e)=>{
      if(e.code==="Enter")
      {
        onEnterPressed()
      }

    }} ref={inputRef}  value={value}  onChange={onChange} className='input-field' placeholder='اسم کار...' type='text'/>
  )
}

export default InputField