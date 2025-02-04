import React from 'react'

const Button = (props) => {
  return (
    <div className='rounded shadow-lg w-max cursor-pointer gap-2.5 bg-black/80 text-white flex items-center p-[0.5rem]'>
        <p className='font-semibold'>{props.text}</p>
        <p className='font-bold'>{props.icon}</p>
    </div>
  )
}

export default Button