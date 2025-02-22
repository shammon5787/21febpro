import React from 'react'
import { IoClose } from "react-icons/io5";


const Card = () => {
  return (
    <div className='bg-green-900 fixed w-full lg:w-[25vw] h-full top-0 right-0 opacity-95 p-4'>
        <div className='flex flex-row items-center justify-between font-semibold text-xl'>
            <h1>Your Orders</h1>
            <IoClose className='text-4xl cursor-pointer' />
        </div>
    </div>
  )
}

export default Card