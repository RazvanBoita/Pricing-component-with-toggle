import React, { useContext } from 'react'
// #a3a8f0, #696fdd
import { ToggleContext } from '../contexts/ToggleContext';
const ToggleButton = () => {
  const {toggle, settoggle} = useContext(ToggleContext);
  return (
    <div className='mx-8 w-full h-full flex justify-center items-center'>
        <input type="checkbox" id='check' className='hidden' onClick={() => {settoggle(!toggle)}}/>
        <label htmlFor="check" className='cursor-pointer w-12 h-6 bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] rounded-3xl relative button' ></label>
    </div>
  )
}

export default ToggleButton