import React from 'react'

const MiddleCard = (props) => {
  return (
    <div className='flex flex-col items-center max-w-[80%] font-montserrat bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] h-xl rounded-xl px-8 md:min-w-[300px] relative z-10'>
      <h2 className='text-xl col-xlight mt-6'>{props.title}</h2>
      <section className='text-4xl sm:text-6xl mt-2 col-xlight px-12'>
        {props.price}
      </section>
      <span className='h-[2px] bg-gray-200 w-full mt-8'></span>
      <p className='text-lg col-xlight mt-2'>{props.storage}</p>
      <span className='h-[2px] bg-gray-200 w-full mt-2'></span>
      <p className='text-lg col-xlight mt-2'>{props.users}</p>
      <span className='h-[2px] bg-gray-200 w-full mt-2'></span>
      <p className='text-lg col-xlight mt-2'>{props.send}</p>
      <span className='h-[2px] bg-gray-200 w-full mt-2'></span>
      <button className='tracking-wide text-[#696fdd] py-3 rounded-lg uppercase text-sm w-full bg-white  mt-8 mb-8'>Learn More</button>
  </div>
  )
}

export default MiddleCard