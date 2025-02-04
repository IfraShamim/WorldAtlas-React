import React from 'react'
import footerContact from '../API/footerApi'

const Footer = () => {
  return (
    <div className='px-4 shadow'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='md:grid grid-cols-3 gap-[2rem]'>
          {footerContact.map((currData, index) => (
            <div key={index} className='md:flex gap-3 cursor-pointer p-[1.5rem]'>
              <div>
              <p className='font-semibold text-2xl'>{currData.icon}</p>
              </div>
              <div>
              <p className='font-semibold'>{currData.title}</p>
              <p className='font-semibold'>{currData.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer